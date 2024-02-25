import { getCategoryNews } from "@/utils/getCategoryNews";

const DynamicPage = ({ searchParams }) => {
    const { data } = getCategoryNews(searchParams.category)
    return (
        <div>
            <h1>Dynamic Page: {data.length}</h1>
        </div>
    );
};

export default DynamicPage;