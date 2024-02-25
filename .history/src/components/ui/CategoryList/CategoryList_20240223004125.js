import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()

    return (
        <div>
            <h1>Category List: {allCtaegoriews}</h1>
        </div>
    );
};

export default CategoryList;