// server.js (Node.js server)

const express = require('express');
const sharp = require('sharp');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for generating images
app.get('/generate-image', async (req, res) => {
    try {
        // Generate an image using sharp
        const image = await sharp({
            create: {
                width: 200,
                height: 200,
                channels: 4,
                background: { r: 255, g: 0, b: 0, alpha: 0.5 }
            }
        })
        .png()
        .toBuffer();

        // Set response headers
        res.setHeader('Content-Type', 'image/png');

        // Send the generated image
        res.send(image);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).send('Error generating image');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
