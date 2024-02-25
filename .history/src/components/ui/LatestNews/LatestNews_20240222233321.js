import topNews from "@/assets/top-news.png";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";


import Image from "next/image";


const LatestNews = async () => {

    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image
                            src={topNews}
                            width={800}
                            height={500}
                            alt="top news"
                        />
                    </CardMedia>
                    <CardContent>
                        <p
                            className="
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        "
                        >
                            Lorem, ipsum.
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography gutterBottom className="my-3">
                            By Lorem ipsum dolor sit amet.
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, laborum?
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid
                className="mt-5"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image
                                    src={news.thumbnail_url}
                                    width={800}
                                    height={300}
                                    alt="top news"
                                />
                            </CardMedia>
                            <CardContent>
                                <p
                                    className="
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        "
                                >
                                    {news.category}
                                </p>
                                <Typography gutterBottom>{news.title}</Typography>
                                <Typography gutterBottom className="my-3">
                                    By Tanmoy Parvez - Mar 18 2023
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;