import { CategoryServiceClient } from "../proto/course_category_grpc_pb";
import { credentials } from "@grpc/grpc-js";

const PORT = 50051;

export const client = new CategoryServiceClient(
    `localhost:${PORT}`,
    credentials.createInsecure()
)

export const nopp = () => {};