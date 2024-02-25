"use client"
import topNews from "@/assets/top-news.png";
import { Box, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';

export default function LatestNews() {
    return (
        <Box className="my-5">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image
                            src={topNews}
                            width={800}
                            height={500}
                            alt="top news"
                        />                </CardMedia>

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
                            Category
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            Some thing is better than nothing
                        </Typography>
                        <Typography gutterBottom className="my-3">
                            By wahid Ahmed
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius pariatur magnam eaque amet vel, natus voluptatem hic commodi omnis veritatis maxime vitae at dolorum, recusandae maiores molestiae eveniet facere fugit!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image
                                    src={topNews}
                                    width={800}
                                    height={500}
                                    alt="top news"
                                />                </CardMedia>

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
                                    Category
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Some thing is better than nothing
                                </Typography>
                                <Typography gutterBottom className="my-3">
                                    By wahid Ahmed
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius pariatur magnam eaque amet vel, natus voluptatem hic commodi omni
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card >
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image
                                    src={topNews}
                                    width={800}
                                    height={500}
                                    alt="top news"
                                />                </CardMedia>

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
                                    Category
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Some thing is better than nothing
                                </Typography>
                                <Typography gutterBottom className="my-3">
                                    By wahid Ahmed
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card >
                </Grid>
                <Grid item xs={6}>
                    <Card >
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
                                    Category
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Some thing is better than nothing
                                </Typography>
                                <Typography gutterBottom className="my-3">
                                    By wahid Ahmed
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius pariatur magnam eaque amet vel, natus voluptatem hic commodi omnis veritatis maxime vitae at dolorum, recusandae maiores molestiae eveniet facere fugit!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card >
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image
                                    src={topNews}
                                    width={800}
                                    height={500}
                                    alt="top news"
                                />                </CardMedia>

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
                                    Category
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Some thing is better than nothing
                                </Typography>
                                <Typography gutterBottom className="my-3">
                                    By wahid Ahmed
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius pariatur magnam eaque amet vel, natus voluptatem hic commodi omnis veritatis maxime vitae at dolorum, recusandae maiores molestiae eveniet facere fugit!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card >
                </Grid>
            </Grid>
        </Box>
    );
}