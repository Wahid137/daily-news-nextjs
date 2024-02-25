
import topNews from "@assets/top-news.png";
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function LatestNews() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia>
                    <Image src={topNews} width={800} height={500} alt="top-news/>
                </CardMedia>
                <CardMedia />
                <CardContent>
                    <Typography gutterBottom>
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card >
    );
}