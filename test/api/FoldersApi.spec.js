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

	var expect = require('expect.js'),
		sinon = require('sinon'),
		ForgeSdk = require('../../src'),
		instance,
		oauth2client,
		credentials,
		mockedApiClientRequest,
		ApiClient = require('../../src/ApiClient'),
		BadInput = require('../../src/model/BadInput'),
		Conflict = require('../../src/model/Conflict'),
		CreateRef = require('../../src/model/CreateRef'),
		Folder = require('../../src/model/Folder'),
		Forbidden = require('../../src/model/Forbidden'),
		JsonApiCollection = require('../../src/model/JsonApiCollection'),
		NotFound = require('../../src/model/NotFound'),
		Refs = require('../../src/model/Refs');

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
		instance = new ForgeSdk.FoldersApi(apiClient);
		mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
	});

	after(function () {
		apiClient.callApi.restore();
	});


	describe('FoldersApi', function () {

		describe('getFolder', function () {
			it('should call getFolder successfully', function (done) {

				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'folder_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid,
					'If-Modified-Since': opts.ifModifiedSince
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Folder;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders/{folder_id}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getFolder(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getFolderContents', function () {
			it('should call getFolderContents successfully', function (done) {

				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'folder_id': sampleStrParam
				};
				var queryParams = {
					'filter[type]': instance.apiClient.buildCollectionParam(opts.filterType, 'csv'),
					'filter[id]': instance.apiClient.buildCollectionParam(opts.filterId, 'csv'),
					'filter[extension.type]': instance.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv'),
					'page[number]': opts.pageNumber,
					'page[limit]': opts.pageLimit,
					'includeHidden': opts.includeHidden
				};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = JsonApiCollection;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders/{folder_id}/contents', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getFolderContents(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getFolderParent', function () {
			it('should call getFolderParent successfully', function (done) {

				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'folder_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Folder;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders/{folder_id}/parent', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getFolderParent(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getFolderRefs', function () {
			it('should call getFolderRefs successfully', function (done) {

				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'folder_id': sampleStrParam
				};
				var queryParams = {
					'filter[type]': instance.apiClient.buildCollectionParam(opts.filterType, 'csv'),
					'filter[id]': instance.apiClient.buildCollectionParam(opts.filterId, 'csv'),
					'filter[extension.type]': instance.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv')
				};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = JsonApiCollection;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders/{folder_id}/refs', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getFolderRefs(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('getFolderRelationshipsRefs', function () {
			it('should call getFolderRelationshipsRefs successfully', function (done) {

				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'folder_id': sampleStrParam
				};
				var queryParams = {
					'filter[type]': instance.apiClient.buildCollectionParam(opts.filterType, 'csv'),
					'filter[id]': instance.apiClient.buildCollectionParam(opts.filterId, 'csv'),
					'filter[refType]': instance.apiClient.buildCollectionParam(opts.filterRefType, 'csv'),
					'filter[direction]': opts.filterDirection,
					'filter[extension.type]': instance.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv')
				};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Refs;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getFolderRelationshipsRefs(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('postFolder', function () {
			it('should call postFolder successfully', function (done) {

				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					'project_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.postFolder(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('postFolderRelationshipsRef', function () {
			it('should call postFolderRelationshipsRef successfully', function (done) {

				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					'project_id': sampleStrParam,
					'folder_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.postFolderRelationshipsRef(sampleStrParam, sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

		describe('patchFolder', function () {
			it('should call patchFolder successfully', function (done) {

				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					'project_id': sampleStrParam,
					'folder_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/folders/{folder_id}', 'PATCH',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.patchFolder(sampleStrParam, sampleStrParam, postBody, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});

	});

}());