import Admin from '../models/Admin.js';

class AuthRepository {
  async findByUsername(username) {
    return await Admin.findOne({ username });
  }

  async create(adminData) {
    return await Admin.create(adminData);
  }
}

export default new AuthRepository();
