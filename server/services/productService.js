import productRepository from '../repositories/productRepository.js';

class ProductService {
  async getAllProducts() {
    return await productRepository.findAll();
  }

  async addProduct(bodyData, fileData) {
    let imagePath = bodyData.image; 
    
    if (fileData) {
      imagePath = `http://localhost:5000/uploads/${fileData.filename}`;
    }

    const productData = {
      name: bodyData.name,
      specs: bodyData.specs,
      price: bodyData.price,
      image: imagePath,
      category: bodyData.category || 'New Laptops',
    };

    return await productRepository.create(productData);
  }

  async modifyProduct(id, bodyData, fileData) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }

    let imagePath = bodyData.image;
    if (fileData) {
      imagePath = `http://localhost:5000/uploads/${fileData.filename}`;
    }

    const updateData = {
      name: bodyData.name,
      specs: bodyData.specs,
      price: bodyData.price,
      category: bodyData.category,
      image: imagePath,
    };

    return await productRepository.update(product, updateData);
  }

  async removeProduct(id) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }

    await productRepository.delete(product);
  }
}

export default new ProductService();
