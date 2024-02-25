import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()
    // https://the-news-portal-server.vercel.app/news?category=technology

    return (
        <Box className="bg-gray-100 px-5 py-2 mt-5">
            <Typography variant="h6" sx={{ mb: 2 }}>Category</Typography>
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