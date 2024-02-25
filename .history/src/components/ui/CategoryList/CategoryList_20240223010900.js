import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()

    return (
        <Box>
            <Typography variant="h6">Category</Typography>
            <Divider />
            <Stack rowGap={1} sx={{ mt: 2.5 }}>
                {
                    allCategories.map((category) => (
                        <Button variant="outlined" key={category.id}>
                            <Link href={category.title}>{category.title}</Link>
                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;