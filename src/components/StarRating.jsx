import React from 'react';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const StarRating = ({ rating, color }) => {
    return (
        <StarRatingDisplay
            rating={rating}
            color={color}
            starSize={20}
            emptyColor="#000000"
        />
    );
};

export default StarRating;
