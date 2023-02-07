require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const mongoose = require("mongoose");
const fs = require("fs");
const Image = require("../Models/images.js");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const newImage = async (req, res) => {
    getNewImage(req.body.prompt).then((image) => {
        // return the imageUrl as json
        res.json({
            imageUrl: image.imageUrl,
        });
    });
};

const allImages = async (req, res) => {
    Image.find()
        .exec()
        .then((images) => {
            res.json(images);
        });
};

// get a specific number of images
const getImages = async (req, res) => {
    Image.find({})
        .limit(parseInt(req.params.count))
        .exec()
        .then((images) => {
            res.json(images);
        });
};

// Create a variation of an image
const variantImage = async (req, res) => {
    Image.findById(req.params.id)
        .exec()
        .then((image) => {
            // modify the image
            getVariantImage(image._id).then((newImage) => {
                res.json({
                    imageUrl: newImage.imageUrl,
                });
            });
        });
};

async function getNewImage(prompt) {
    try {
        // size can be 256x256, 512x512, 1024x1024
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            response_format: "b64_json",
            size: "512x512",
        });
        return saveImage(response.data.data[0].b64_json);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

async function getVariantImage(imageId) {
    try {
        const imageUrl = `public/images/${imageId}.png`;
        // size can be 256x256, 512x512, 1024x1024
        const response = await openai.createImageVariation(
            fs.createReadStream(imageUrl),
            1,
            "512x512",
            "b64_json"
        );

        return saveImage(response.data.data[0].b64_json);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

function saveImage(imageData) {
    const newImage = new Image({
        _id: new mongoose.Types.ObjectId(),
    });
    const relativeUrl = `/images/${newImage._id}.png`;
    const baseUrl = process.env.BASE_URL;

    newImage.imageUrl = baseUrl + relativeUrl;

    // save the image to the file system and the database
    fs.writeFileSync(`public/${relativeUrl}`, imageData, "base64");
    newImage.save();
    console.log("The image has been Saved!");

    return newImage;
}

module.exports = {
    newImage,
    allImages,
    getImages,
    variantImage,
};
