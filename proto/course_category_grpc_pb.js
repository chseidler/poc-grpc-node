// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var course_category_pb = require('./course_category_pb.js');

function serialize_pb_Category(arg) {
  if (!(arg instanceof course_category_pb.Category)) {
    throw new Error('Expected argument of type pb.Category');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Category(buffer_arg) {
  return course_category_pb.Category.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CategoryGetRequest(arg) {
  if (!(arg instanceof course_category_pb.CategoryGetRequest)) {
    throw new Error('Expected argument of type pb.CategoryGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CategoryGetRequest(buffer_arg) {
  return course_category_pb.CategoryGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CategoryList(arg) {
  if (!(arg instanceof course_category_pb.CategoryList)) {
    throw new Error('Expected argument of type pb.CategoryList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CategoryList(buffer_arg) {
  return course_category_pb.CategoryList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateCategoryRequest(arg) {
  if (!(arg instanceof course_category_pb.CreateCategoryRequest)) {
    throw new Error('Expected argument of type pb.CreateCategoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateCategoryRequest(buffer_arg) {
  return course_category_pb.CreateCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_blank(arg) {
  if (!(arg instanceof course_category_pb.blank)) {
    throw new Error('Expected argument of type pb.blank');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_blank(buffer_arg) {
  return course_category_pb.blank.deserializeBinary(new Uint8Array(buffer_arg));
}


var CategoryServiceService = exports.CategoryServiceService = {
  createCategory: {
    path: '/pb.CategoryService/CreateCategory',
    requestStream: false,
    responseStream: false,
    requestType: course_category_pb.CreateCategoryRequest,
    responseType: course_category_pb.Category,
    requestSerialize: serialize_pb_CreateCategoryRequest,
    requestDeserialize: deserialize_pb_CreateCategoryRequest,
    responseSerialize: serialize_pb_Category,
    responseDeserialize: deserialize_pb_Category,
  },
  createCategoryStream: {
    path: '/pb.CategoryService/CreateCategoryStream',
    requestStream: true,
    responseStream: false,
    requestType: course_category_pb.CreateCategoryRequest,
    responseType: course_category_pb.CategoryList,
    requestSerialize: serialize_pb_CreateCategoryRequest,
    requestDeserialize: deserialize_pb_CreateCategoryRequest,
    responseSerialize: serialize_pb_CategoryList,
    responseDeserialize: deserialize_pb_CategoryList,
  },
  createCategoryStreamBidirectional: {
    path: '/pb.CategoryService/CreateCategoryStreamBidirectional',
    requestStream: true,
    responseStream: true,
    requestType: course_category_pb.CreateCategoryRequest,
    responseType: course_category_pb.Category,
    requestSerialize: serialize_pb_CreateCategoryRequest,
    requestDeserialize: deserialize_pb_CreateCategoryRequest,
    responseSerialize: serialize_pb_Category,
    responseDeserialize: deserialize_pb_Category,
  },
  listCategories: {
    path: '/pb.CategoryService/ListCategories',
    requestStream: false,
    responseStream: false,
    requestType: course_category_pb.blank,
    responseType: course_category_pb.CategoryList,
    requestSerialize: serialize_pb_blank,
    requestDeserialize: deserialize_pb_blank,
    responseSerialize: serialize_pb_CategoryList,
    responseDeserialize: deserialize_pb_CategoryList,
  },
  getCategory: {
    path: '/pb.CategoryService/GetCategory',
    requestStream: false,
    responseStream: false,
    requestType: course_category_pb.CategoryGetRequest,
    responseType: course_category_pb.Category,
    requestSerialize: serialize_pb_CategoryGetRequest,
    requestDeserialize: deserialize_pb_CategoryGetRequest,
    responseSerialize: serialize_pb_Category,
    responseDeserialize: deserialize_pb_Category,
  },
};

exports.CategoryServiceClient = grpc.makeGenericClientConstructor(CategoryServiceService);
