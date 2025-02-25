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

module.exports = (function () {
	'use strict';

	var OAuth2 = require('./OAuth2');
	var ApiClient = require('../ApiClient');

	/**
	 * @module auth/OAuth2TwoLegged
	 */

	/**
	 * Constructs a new <code>OAuth2TwoLegged</code>.
	 * Inherits from OAuth2
	 * @alias module:auth/OAuth2TwoLegged
	 */
	var OAuth2TwoLegged = function (clientId, clientSecret, scope, autoRefresh, apiClient) {
		const _ApiClient = apiClient || require('../ApiClient').instance;

		this.authentication = {
			tokenUrl: '/authentication/v1/authenticate',
			scopes: {
				'data:read': 'The application will be able to read the end user’s data within the Autodesk ecosystem.',
				'data:write': 'The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.',
				'data:create': 'The application will be able to create data on behalf of the end user within the Autodesk ecosystem.',
				'data:search': 'The application will be able to search the end user’s data within the Autodesk ecosystem.',
				'bucket:create': 'The application will be able to create an OSS bucket it will own.',
				'bucket:read': 'The application will be able to read the metadata and list contents for OSS buckets that it has access to.',
				'bucket:update': 'The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.',
				'bucket:delete': 'The application will be able to delete a bucket that it has permission to delete.',
				'code:all': 'The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).',
				'account:read': 'For Product APIs, the application will be able to read the account data the end user has entitlements to.',
				'account:write': 'For Product APIs, the application will be able to update the account data the end user has entitlements to.',
				'user-profile:read': 'The application will be able to read the end user’s profile data.',
				'viewables:read': 'The application will have read access to viewable resources such as thumbnails. This scope is a subset of data:read.'
			}
		};

		this.authName = 'oauth2_application';

		OAuth2.call(this, clientId, clientSecret, scope, autoRefresh, _ApiClient);
	};

	// inherit from OAuth2 class
	OAuth2TwoLegged.prototype = Object.create(OAuth2.prototype);

	// Set the "constructor" property to refer to OAuth2
	OAuth2TwoLegged.prototype.constructor = OAuth2TwoLegged;

	/**
	 * Set the credentials manually
	 * @param credentials
	 */
	OAuth2TwoLegged.prototype.setCredentials = function (credentials) {
		this.credentials = credentials;
	};

	/**
	 * Get the credentials
	 */
	OAuth2TwoLegged.prototype.getCredentials = function () {
		return this.credentials;
	};

	/**
	 * Check if token is authorized
	 * @returns {boolean}
	 */
	OAuth2TwoLegged.prototype.isAuthorized = function () {
		return !!(this.credentials && this.credentials.expires_at && this.credentials.expires_at > Date.now());
	};

	/**
	 * Authorize and get an access token
	 * @return Promise
	 */
	OAuth2TwoLegged.prototype.authenticate = function () {
		var _this = this;
		return new Promise(function (resolve, reject) {
			if (_this.authentication && _this.authentication.tokenUrl) {
				var url = _this.basePath + _this.authentication.tokenUrl;

				var body = {
					grant_type: 'client_credentials',
					client_id: _this.clientId,
					client_secret: _this.clientSecret,
					scope: _this.scope
				};

				_this.doPostRequest(url, body, function (response) {
					// add expires_at property
					var credentials = Object.assign({}, response, {
						expires_at: new Date(Date.now() + response.expires_in * 1000)
					});
					_this.setCredentials(credentials);
					resolve(credentials);
				}, function (errResponse) {
					ApiClient.instance.debug('authenticate error', errResponse);
					reject(errResponse);
				});

			} else {
				ApiClient.instance.debug('tokenUrl is not defined in the authentication object');
				reject(new Error('tokenUrl is not defined in the authentication object'));
			}
		});
	};

	return OAuth2TwoLegged;
}());