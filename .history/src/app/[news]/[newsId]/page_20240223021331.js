
const NewsDetails = ({ searchParams }) => {
    console.log(searchParams)
    return (
        <div>
            <h1>News Details: {searchParams}</h1>
        </div>
    );
};

export default NewsDetails;