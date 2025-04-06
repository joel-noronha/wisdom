const router = require("express").Router();
const Nugget = require("../models/Nugget");

// get all nuggets
router.get("/", async (req, res) => {
  try {
    const nuggets = await Nugget.find();
    return res.status(200).json({ data: nuggets });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

//get random nugget
router.get("/random", async (req, res) => {
  try {
    const count = await Nugget.countDocuments();
    if (count === 0) {
      return res.status(404).json({ message: "No nuggets exist" });
    }
    const randomind = Math.floor(Math.random() * count);
    const randomnugget = await Nugget.findOne().skip(randomind);
    return res.status(200).json({ data: randomnugget });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

//add new nugget
router.post("/", async (req, res) => {
  try {
    const { text, author } = req.body;

    if (!text || !author) {
      return res.status(400).json({ message: "Text and Author are required" });
    }
    const nugget = new Nugget({ text, author });
    await nugget.save();
    return res.status(201).json({
      id: nugget._id,
      text: nugget.text,
      author: nugget.author,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete a nugget
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const nugget = await Nugget.findByIdAndDelete(id);
    if (!nugget) {
      return res.status(404).json({ message: "Nugget not found" });
    }

    return res.status(200).json({ message: "Nugget deletion success" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
