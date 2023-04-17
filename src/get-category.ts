import { Category, CategoryGetRequest } from "../proto/course_category_pb";
import { client } from "./utils";

export default function getCategory(id: string) {
    return new Promise<Category>((resolve, reject) => {
        const request = new CategoryGetRequest();
        request.setId(id);

        client.getCategory(request, (err, category) => {
            err ? reject(err) : resolve(category);
        })
    })
}