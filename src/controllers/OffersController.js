const OffersService = require("../services/OffersService");

module.exports = {
  async index(req, res) {
    await OffersService.index(req, res);
  },

  async store(req, res) {
    await OffersService.create(req, res);
  },

  async destroy(req, res) {
    await OffersService.destroy(req, res);
  },

  async allOffers(req, res) {
    await OffersService.offers(req, res);
  },

  async update(req, res) {
    await OffersService.update(req, res);
  },
};
