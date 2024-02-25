import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = () => {
    const { data } = getAllCategories()

    return (
        <div>
            <h1>Category List: {data.length}</h1>
        </div>
    );
};

export default CategoryList;