import { Category, blank } from "../proto/course_category_pb";
import { client } from "./utils";

export default function getAllCategories() {
    return new Promise<Category[]>((resolve, reject) => {
        client.listCategories(new blank(), (err, categories) => {
            err ? reject(err) : resolve(categories.getCategoriesList());
        });
    })
}