import { getCategoryNews } from "@/utils/getCategoryNews";

const DynamicPage = async ({ searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category)
    return (
        <div>
            <h1>Total <span className="font-bold text-teal-400">{searchParams.category}</span> News: {data.length}</h1>
        </div>
    );
};

export default DynamicPage;