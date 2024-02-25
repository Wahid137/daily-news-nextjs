import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()

    return (
        <Box>
            <Typography variant="h6">Category</Typography>
            <Divider />
            <Stack rowGap={1}>
                {
                    allCategories.map((category) => (
                        <Button>
                            <Link>{category.title}</Link>
                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;