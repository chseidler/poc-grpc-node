// package: pb
// file: course_category.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as course_category_pb from "./course_category_pb";

interface ICategoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCategory: ICategoryServiceService_ICreateCategory;
    createCategoryStream: ICategoryServiceService_ICreateCategoryStream;
    createCategoryStreamBidirectional: ICategoryServiceService_ICreateCategoryStreamBidirectional;
    listCategories: ICategoryServiceService_IListCategories;
    getCategory: ICategoryServiceService_IGetCategory;
}

interface ICategoryServiceService_ICreateCategory extends grpc.MethodDefinition<course_category_pb.CreateCategoryRequest, course_category_pb.Category> {
    path: "/pb.CategoryService/CreateCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<course_category_pb.CreateCategoryRequest>;
    requestDeserialize: grpc.deserialize<course_category_pb.CreateCategoryRequest>;
    responseSerialize: grpc.serialize<course_category_pb.Category>;
    responseDeserialize: grpc.deserialize<course_category_pb.Category>;
}
interface ICategoryServiceService_ICreateCategoryStream extends grpc.MethodDefinition<course_category_pb.CreateCategoryRequest, course_category_pb.CategoryList> {
    path: "/pb.CategoryService/CreateCategoryStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<course_category_pb.CreateCategoryRequest>;
    requestDeserialize: grpc.deserialize<course_category_pb.CreateCategoryRequest>;
    responseSerialize: grpc.serialize<course_category_pb.CategoryList>;
    responseDeserialize: grpc.deserialize<course_category_pb.CategoryList>;
}
interface ICategoryServiceService_ICreateCategoryStreamBidirectional extends grpc.MethodDefinition<course_category_pb.CreateCategoryRequest, course_category_pb.Category> {
    path: "/pb.CategoryService/CreateCategoryStreamBidirectional";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<course_category_pb.CreateCategoryRequest>;
    requestDeserialize: grpc.deserialize<course_category_pb.CreateCategoryRequest>;
    responseSerialize: grpc.serialize<course_category_pb.Category>;
    responseDeserialize: grpc.deserialize<course_category_pb.Category>;
}
interface ICategoryServiceService_IListCategories extends grpc.MethodDefinition<course_category_pb.blank, course_category_pb.CategoryList> {
    path: "/pb.CategoryService/ListCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<course_category_pb.blank>;
    requestDeserialize: grpc.deserialize<course_category_pb.blank>;
    responseSerialize: grpc.serialize<course_category_pb.CategoryList>;
    responseDeserialize: grpc.deserialize<course_category_pb.CategoryList>;
}
interface ICategoryServiceService_IGetCategory extends grpc.MethodDefinition<course_category_pb.CategoryGetRequest, course_category_pb.Category> {
    path: "/pb.CategoryService/GetCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<course_category_pb.CategoryGetRequest>;
    requestDeserialize: grpc.deserialize<course_category_pb.CategoryGetRequest>;
    responseSerialize: grpc.serialize<course_category_pb.Category>;
    responseDeserialize: grpc.deserialize<course_category_pb.Category>;
}

export const CategoryServiceService: ICategoryServiceService;

export interface ICategoryServiceServer extends grpc.UntypedServiceImplementation {
    createCategory: grpc.handleUnaryCall<course_category_pb.CreateCategoryRequest, course_category_pb.Category>;
    createCategoryStream: grpc.handleClientStreamingCall<course_category_pb.CreateCategoryRequest, course_category_pb.CategoryList>;
    createCategoryStreamBidirectional: grpc.handleBidiStreamingCall<course_category_pb.CreateCategoryRequest, course_category_pb.Category>;
    listCategories: grpc.handleUnaryCall<course_category_pb.blank, course_category_pb.CategoryList>;
    getCategory: grpc.handleUnaryCall<course_category_pb.CategoryGetRequest, course_category_pb.Category>;
}

export interface ICategoryServiceClient {
    createCategory(request: course_category_pb.CreateCategoryRequest, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    createCategory(request: course_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    createCategory(request: course_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    createCategoryStream(callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    createCategoryStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    createCategoryStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    createCategoryStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    createCategoryStreamBidirectional(): grpc.ClientDuplexStream<course_category_pb.CreateCategoryRequest, course_category_pb.Category>;
    createCategoryStreamBidirectional(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<course_category_pb.CreateCategoryRequest, course_category_pb.Category>;
    createCategoryStreamBidirectional(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<course_category_pb.CreateCategoryRequest, course_category_pb.Category>;
    listCategories(request: course_category_pb.blank, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    listCategories(request: course_category_pb.blank, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    listCategories(request: course_category_pb.blank, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    getCategory(request: course_category_pb.CategoryGetRequest, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    getCategory(request: course_category_pb.CategoryGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    getCategory(request: course_category_pb.CategoryGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
}

export class CategoryServiceClient extends grpc.Client implements ICategoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createCategory(request: course_category_pb.CreateCategoryRequest, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    public createCategory(request: course_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    public createCategory(request: course_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    public createCategoryStream(callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    public createCategoryStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    public createCategoryStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    public createCategoryStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientWritableStream<course_category_pb.CreateCategoryRequest>;
    public createCategoryStreamBidirectional(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<course_category_pb.CreateCategoryRequest, course_category_pb.Category>;
    public createCategoryStreamBidirectional(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<course_category_pb.CreateCategoryRequest, course_category_pb.Category>;
    public listCategories(request: course_category_pb.blank, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public listCategories(request: course_category_pb.blank, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public listCategories(request: course_category_pb.blank, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public getCategory(request: course_category_pb.CategoryGetRequest, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    public getCategory(request: course_category_pb.CategoryGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
    public getCategory(request: course_category_pb.CategoryGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: course_category_pb.Category) => void): grpc.ClientUnaryCall;
}
