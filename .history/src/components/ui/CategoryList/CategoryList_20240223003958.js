import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = () => {
    const { data } = getAllCategories()

    return (
        <div>
            <h1>Category List: {allCategories.length}</h1>
        </div>
    );
};

export default CategoryList;