import { getSingleNews } from "@/utils/getSingleNews";

const NewsDetails = ({ params }) => {
    const { data } = getSingleNews(params.newsId)

    return (
        <div>
            <h1>News Details: {params.newsId}</h1>
        </div>
    );
};

export default NewsDetails;