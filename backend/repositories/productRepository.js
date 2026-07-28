import Product from '../models/Product.js';

class ProductRepository {
  async findAll() {
    return await Product.find().sort({ createdAt: -1 });
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async create(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async update(product, updateData) {
    if (updateData.name != null) product.name = updateData.name;
    if (updateData.specs != null) product.specs = updateData.specs;
    if (updateData.price != null) product.price = updateData.price;
    if (updateData.category != null) product.category = updateData.category;
    if (updateData.image != null) product.image = updateData.image;

    return await product.save();
  }

  async delete(product) {
    return await product.deleteOne();
  }
}

export default new ProductRepository();
