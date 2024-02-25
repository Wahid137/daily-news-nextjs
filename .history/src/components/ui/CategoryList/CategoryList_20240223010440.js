import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Typography } from "@mui/material";

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()

    return (
        <Box>
            <Typography variant="h6">Category</Typography>
        </Box>
    );
};

export default CategoryList;