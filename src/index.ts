import getCategory from "./get-category";
import getAllCategories from "./list-categories";

async function run() {
    const category = await getCategory('0676b17a-c302-41a6-8186-3ba13b3b9653');
    console.log(category.toString());

    const categories = await getAllCategories();
    console.log(`Listing all ${categories.length} categories`)
    for (const category of categories) {
        console.log(category.toString())
    }
}

run();