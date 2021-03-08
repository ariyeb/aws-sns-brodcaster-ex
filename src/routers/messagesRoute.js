const express = require('express');
const { publishMessageToSns } = require("../middleware/sns");

const router = new express.Router();

router.post("/publish-message", publishMessageToSns, (req, res) => {
    res.send({ messageId: req.messageId });
});

module.exports = router;