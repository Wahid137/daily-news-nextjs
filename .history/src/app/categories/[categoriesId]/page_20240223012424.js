
const DynamicPage = ({ searchParams }) => {
    return (
        <div>
            <h1>Dynamic Page: {searchParams.category}</h1>
        </div>
    );
};

export default DynamicPage;