import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = () => {
    return (
        <Box>
            <Container>
                <Grid>
                    <Grid>
                        <h1>Categories</h1>
                    </Grid>
                    <Grid>
                        <h1>News</h1>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;