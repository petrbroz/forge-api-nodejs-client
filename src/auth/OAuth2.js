/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*jshint esversion: 9 */

module.exports = (function () {
	'use strict';

	//var rax = require('retry-axios');
	var axios = require('axios');
	const jwksClient = require('jwks-rsa');
	const jwt = require('jsonwebtoken');
	var ApiClient = require('../ApiClient');

	/**
	 * Construct the scope string
	 * @param allScopes
	 * @param specificScope
	 * @returns {Boolean}
	 */
	var validateScope = function (allScopes, specificScope) {
		if (allScopes) {
			if (specificScope) {
				for (var key in specificScope) {
					if (!allScopes.hasOwnProperty(specificScope[key])) {
						throw specificScope[key] + " scope is not allowed";
					}
				}
			} else { // throw if scope is null or undefined
				throw "Scope is missing or empty, you must provide a valid scope";
			}
		} else {
			throw "Authentication does not allow any scopes";
		}
		return true;
	};

	/**
	 * A general POST request
	 * @param url
	 * @param params
	 * @param callbackSuccess
	 * @param callbackError
	 */
	var doPostRequest = function (url, params, callbackSuccess, callbackError) {
		var headers = {
			...ApiClient.userAgentHeaders,
			'Content-Type': 'application/x-www-form-urlencoded',
		};

		var paramsBody = [];
		for (var key in params) {
			if (params.hasOwnProperty(key)) {
				paramsBody.push(key + '=' + params[key]);
			}
		}

		axios({
			method: 'POST',
			url,
			headers,
			data: paramsBody.join('&'),
		})
			.then((res) => callbackSuccess(res.data))
			.catch((err) => callbackError(err));
	};

	/**
	 * A general POST request
	 * @param url
	 * @param params
	 * @param headers
	 * @param callbackSuccess
	 * @param callbackError
	 */
	const doPostRequestWithHeaders = function (url, params, headers, callbackSuccess, callbackError) {
		headers = headers || {};
		headers = {
			...headers,
			...ApiClient.userAgentHeaders,
			'Content-Type': 'application/x-www-form-urlencoded',
		};

		let paramsBody = [];
		for (let key in params) {
			if (params.hasOwnProperty(key))
				paramsBody.push(key + '=' + params[key]);
		}

		axios({
			method: 'POST',
			url,
			headers,
			data: paramsBody.join('&'),
		})
			.then((res) => callbackSuccess(res.body))
			.catch((err) => callbackError(err));
	};

	/**
	 * @module auth/OAuth2
	 */

	/**
	 * Trait for creating OAuth2 objects
	 * Constructs a new <code>oAuth2</code>.
	 * @alias module:auth/OAuth2
	 */
	var OAuth2 = function (clientId, clientSecret, scope, autoRefresh, apiClient) {
		const _ApiClient = apiClient || require('../ApiClient').instance;

		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.credentials = {};
		this.credentials.expires_at = Date.now();
		this.autoRefresh = autoRefresh || false; // don't auto refresh by default

		//set the base path for the auth endpoints
		this.basePath = _ApiClient.basePath;

		// Implement a sort of interface in JS
		if (!this.hasMember('authentication')) {
			throw new Error('Your OAuth2 object is missing the "authentication" property');
		}

		//this.authentications must be implemented in the child Class
		var validScope = validateScope(this.authentication.scopes, scope);

		//Make sure passed scope is valid
		if (validScope) {
			this.scope = scope.join(' ');
		}
	};

	OAuth2.prototype.doPostRequest = doPostRequest;
	OAuth2.prototype.doPostRequestWithHeaders = doPostRequestWithHeaders;

	const BasicAuthorization = function (clientId, clientSecret) {
		let basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
		return (`Basic ${basic}`);
	};
	OAuth2.prototype.BasicAuthorization = BasicAuthorization;

	const verifyToken = function (token) {
		const _this = this;
		return (new Promise((resolve, reject) => {
			//console.debug('Verifying JWT token');
			const well_known_jwks_url = `${this.basePath}/authentication/v2/keys`;
			const decoded = jwt.decode(token, { complete: true });
			const verifyOptions = {
				algorithms: ['RS256'],
				header: decoded.header
			};
			const client = jwksClient({ jwksUri: well_known_jwks_url });

			const getKey = (header, callback) => {
				client.getSigningKey(header.kid, (err, key) => {
					const signingKey = key.publicKey || key.rsaPublicKey;
					//console.log(`signingKey ${signingKey}`);
					callback(null, signingKey);
				});
			};
			jwt.verify(
				token,
				getKey,
				verifyOptions,
				(err, fullyDecoded) => {
					// This will display the decoded JWT token.
					if (typeof fullyDecoded !== 'undefined' && fullyDecoded) {
						resolve(fullyDecoded);
					} else {
						reject(new Error('Invalid token'));
					}
				}
			);
		}));
	};
	OAuth2.prototype.verifyToken = verifyToken;

	// This allows us to create class members that
	// must be present in the child object
	Object.defineProperty(OAuth2.prototype, 'hasMember', {
		enumerable: false,
		value: function (memberName) {
			return (typeof this[memberName] === 'object');
		}
	});

	return OAuth2;

}());