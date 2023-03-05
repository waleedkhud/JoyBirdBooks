import express from 'express';
import Product from '../models/Product.js';
const productRoutes = express.Router();


const getProducts = async (req, res) => {
  console.log('getProducts');
  const products = await Product.find({});
  res.json(products);

}

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if(product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
}



productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct);
productRoutes.get('/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  const products = await Product.find({
    $or: [
     {name: { $regex: keyword, $options: 'i' } },
      {description: { $regex: keyword, $options: 'i' } },
      {author: { $regex: keyword, $options: 'i' } },
      {condition: { $regex: keyword, $options: 'i' } },
      {age: { $regex: keyword, $options: 'i' } },
      {category: { $regex: keyword, $options: 'i' } },
      {genre: { $regex: keyword, $options: 'i' } },
    ],
    });
      res.json(products);
});


export default productRoutes;