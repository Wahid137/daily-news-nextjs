import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Divider, Stack, Typography } from "@mui/material";

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()

    return (
        <Box>
            <Typography variant="h6">Category</Typography>
            <Divider />
            <Stack rowGap={1}>

            </Stack>
        </Box>
    );
};

export default CategoryList;