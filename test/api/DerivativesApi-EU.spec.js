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

module.export = (function () {
	'use strict';

	var expect = require('expect.js');
	var sinon = require('sinon');
	var ForgeSdk = require('../../src');
	var instance;
	var oauth2client;
	var credentials;
	var mockedApiClientRequest;
	var ApiClient = require('../../src/ApiClient');
	var Diagnostics = require('../../src/model/Diagnostics');
	var Formats = require('../../src/model/Formats');
	var Job = require('../../src/model/Job');
	var JobPayload = require('../../src/model/JobPayload');
	var Manifest = require('../../src/model/Manifest');
	var Metadata = require('../../src/model/Metadata');
	var Result = require('../../src/model/Result');

	var sampleStrParam = 'test_string';
	var sampleIntParam = 10;
	var FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || '<your forge client ID>';
	var FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || '<your forge client secret>';

	var apiClient = new ApiClient();
	apiClient.defaultHeaders = { 'x-ads-test': sampleStrParam };

	before(function () {
		oauth2client = new ForgeSdk.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read', 'data:write']);
		credentials = {
			access_token: 'abce'
		};
		instance = new ForgeSdk.DerivativesApi(apiClient, 'EU');
		mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
	});

	after(function () {
		apiClient.callApi.restore();
	});

	describe('DerivativesApi EMEA/EU', function () {

		describe('getFormats', function () {
			it('should call getFormats successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {};
				var queryParams = {};
				var headerParams = {
					'If-Modified-Since': opts.ifModifiedSince,
					'Accept-Encoding': opts.acceptEncoding
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Formats;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/formats', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getFormats(opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('translate', function () {
			it('should call translate successfully', function (done) {
				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {};
				var queryParams = {};
				var headerParams = {
					'x-ads-force': opts.xAdsForce
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Job;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/job', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.translate(sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('setReferences', function () {
			it('should call setReferences successfully', function (done) {
				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					urn: sampleStrParam
				};
				var queryParams = {};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/references', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.setReferences(sampleStrParam, postBody, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getThumbnail', function () {
			it('should call getThumbnail successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'urn': sampleStrParam
				};
				var queryParams = {
					'width': opts.width,
					'height': opts.height,
					'guid': opts.guid
				};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/octet-stream'];
				var returnType = Object;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/thumbnail', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getThumbnail(sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getManifest', function () {
			it('should call getManifest successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'urn': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Accept-Encoding': opts.acceptEncoding
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Manifest;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/manifest', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getManifest(sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('deleteManifest', function () {
			it('should call deleteManifest successfully', function (done) {
				var postBody = null;
				var pathParams = {
					'urn': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/x-www-form-urlencoded'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Result;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/manifest', 'DELETE',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.deleteManifest(sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getDerivativeManifest', function () {
			it('should call getDerivativeManifest successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'urn': sampleStrParam,
					'derivativeUrn': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Range': opts.range,
					'Accept-Encoding': opts.acceptEncoding, // 'deflate, gzip, br'
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/octet-stream'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/manifest/{derivativeUrn}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getDerivativeManifest(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getDerivativeManifestInfo', function () {
			it('should call getDerivativeManifestInfo successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'urn': sampleStrParam,
					'derivativeUrn': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {};
				var formParams = {};

				var contentTypes = [];
				var accepts = [];
				var returnType = null;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/manifest/{derivativeUrn}', 'HEAD',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getDerivativeManifestInfo(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getMetadata', function () {
			it('should call getMetadata successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'urn': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Accept-Encoding': opts.acceptEncoding
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Metadata;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/metadata', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getMetadata(sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getModelviewMetadata', function () {
			it('should call getModelviewMetadata successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'urn': sampleStrParam,
					'guid': sampleStrParam
				};
				var queryParams = {
					'forceget': opts.forceget || false
				};
				var headerParams = {
					'Accept-Encoding': opts.acceptEncoding,
					'x-ads-force': opts.xAdsForce || false,
					'x-ads-derivative-format': opts.xAdsFormat || 'latest'
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Metadata;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/metadata/{guid}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getModelviewMetadata(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getModelviewProperties', function () {
			it('should call getModelviewProperties successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'urn': sampleStrParam,
					'guid': sampleStrParam
				};
				var queryParams = {
					'forceget': opts.forceget || false,
					'objectid': opts.objectid || null
				};
				var headerParams = {
					'Accept-Encoding': opts.acceptEncoding,
					'x-ads-force': opts.xAdsForce || false,
					'x-ads-derivative-format': opts.xAdsFormat || 'latest'
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Metadata;

				mockedApiClientRequest.withArgs('/modelderivative/v2/regions/eu/designdata/{urn}/metadata/{guid}/properties', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getModelviewProperties(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

	});

}());