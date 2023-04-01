import React from 'react';
import './card.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
    title: string;
    description: string;
    thumbnail: string;
}

const CardComponent: React.FC<Props> = ({ title, description, thumbnail }) => {
    return (
        <Card className="card">
            <CardMedia className="card-thumbnail" image={thumbnail} />
            <CardContent className="card-content">
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;