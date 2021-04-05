const Advertiser = require("../models/Adverstiser");

class AdvertisersRepository {
  async login(email) {
    return await Advertiser.findOne({ where: { email: email } });
  }
  async store(schema) {
    return await Advertiser.create(schema);
  }
  async getAdvertiser(email) {
    return await Advertiser.findAll({ where: { email: email } });
  }
  async allAdvertisers() {
    return await Advertiser.findAll();
  }
  async updateAdvertiser(isLogged, id) {
    return await Advertiser.update({ isLogged }, { where: { id: id } });
  }
}

module.exports = new AdvertisersRepository();
