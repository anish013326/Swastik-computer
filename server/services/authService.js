import jwt from 'jsonwebtoken';
import authRepository from '../repositories/authRepository.js';

class AuthService {
  generateToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  }

  async login(username, password) {
    const admin = await authRepository.findByUsername(username);
    
    if (admin && (await admin.matchPassword(password))) {
      return {
        _id: admin._id,
        username: admin.username,
        token: this.generateToken(admin._id),
      };
    } else {
      throw new Error('Invalid username or password');
    }
  }

  async seedAdmin() {
    const adminExists = await authRepository.findByUsername('admin');
    if (adminExists) {
      throw new Error('Admin already exists');
    }

    return await authRepository.create({
      username: 'admin',
      password: 'password123'
    });
  }
}

export default new AuthService();
