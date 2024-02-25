"use client"
import topNews from "@/assets/top-news.png";
import { Box, CardActionArea, CardContent, Typography } from '@mui/material';
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
                        <Typography >
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        </Box>
    );
}