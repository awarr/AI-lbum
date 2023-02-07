const express = require("express");
//const checkAuth = require('../middleware/checkAuth.middleware');
const imageControllers = require("../controllers/images.controllers");
const router = express.Router();
router.post("/newImage", imageControllers.newImage);
router.get("/getImages", imageControllers.allImages);
router.get("/getImages/:count", imageControllers.getImages);
router.post("/variantImage/:id", imageControllers.variantImage);

module.exports = router;
