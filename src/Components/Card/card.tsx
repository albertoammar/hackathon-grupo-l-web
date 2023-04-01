import React from 'react';
import './card.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
    title: string;
    description: string;
    category: string;
    thumbnail: string;
    videoUrl: string;
    publishDate: string;
}

const CardComponent: React.FC<Props> = ({ title, description, category, thumbnail, publishDate }) => {
    return (
        <Card className="card">
            <CardMedia className="card-thumbnail" image={thumbnail} />
            <CardContent className="card-content">
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                    {category}
                    {publishDate}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;