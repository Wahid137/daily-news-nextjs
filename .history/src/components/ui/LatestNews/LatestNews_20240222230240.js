
import topNews from "@/assets/top-news.png";
import { CardActionArea, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';

export default function LatestNews() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia>
                    <Image src={topNews} width={800} height={500} alt="top-news" />
                </CardMedia>

                <CardContent>
                    <Typography gutterBottom>
                        Lizard
                    </Typography>
                    <Typography >
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}