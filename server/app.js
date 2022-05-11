if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const { connect } = require("./config/mongodb");
const ProductModel = require("./models/Product");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World! dasdssssssss");
});

app.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

app.post("/products", async(req,res)=>{
    try {
        await ProductModel.createProduct(req.body);
        res.status(201).json({ message: "product created" });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
})

app.put("/products/:id", async (req,res)=>{
  try {
      await ProductModel.updateUser(req.params.id,req.body);
      res.status(200).json({ message: "update success" });
  } catch (error) {
      res.status(500).json({ message: "internal server error" });
  }
})

app.delete("/products/:id", async (req,res)=>{
    try {
        await ProductModel.deleteProduct(req.params.id);
        res.status(200).json({ message: "product deleted" });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
})


connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Example app listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js ~ line 30 ~ connect ~ error", err);
  });
