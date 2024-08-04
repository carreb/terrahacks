import React from 'react';
import factoryImg from './assets/factory.png'; // Import the image

const MAP_WIDTH = 1920; // Map width
const MAP_HEIGHT = 1080; // Map height

// Define the size and position of the central square
const CENTRAL_SQUARE_WIDTH = 700; // Wider central square width
const CENTRAL_SQUARE_HEIGHT = 500; // Adjust the height as needed
const CENTRAL_SQUARE_X_START = (MAP_WIDTH - CENTRAL_SQUARE_WIDTH) / 2;
const CENTRAL_SQUARE_Y_START = (MAP_HEIGHT - CENTRAL_SQUARE_HEIGHT) / 2 - 150; // Move it up by 100 pixels

function Piece({ x, y, type }) {
    // Ensure the piece is within the central square
    const constrainedX = Math.max(CENTRAL_SQUARE_X_START, Math.min(x, CENTRAL_SQUARE_X_START + CENTRAL_SQUARE_WIDTH - 200)); // 200 is the width of the piece
    const constrainedY = Math.max(CENTRAL_SQUARE_Y_START, Math.min(y, CENTRAL_SQUARE_Y_START + CENTRAL_SQUARE_HEIGHT - 200)); // 200 is the height of the piece

    // Determine the image to use based on the type
    const getImage = () => {
        switch (type) {
            case 'Factory':
                return factoryImg; // Use the factory image for 'Factory' type
            // Add more cases if you have different types with different images
            default:
                return null; // Default or fallback image
        }
    };

    return (
        <div
            style={{
                position: 'absolute',
                width: 200,
                height: 200,
                borderRadius: '50%',
                backgroundSize: 'cover', // Ensure the image covers the div
                backgroundImage: `url(${getImage()})`, // Set the image as the background
                left: constrainedX,
                top: constrainedY,
                zIndex: 4
            }}
        >
            {/* You can optionally add more content here */}
        </div>
    );
}

export default Piece;