import { getCategoryNews } from "@/utils/getCategoryNews";

const DynamicPage = async ({ searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category)
    return (
        <div>
            <h1>Total {searchParams.category} News: {data.length}</h1>
        </div>
    );
};

export default DynamicPage;