const AdvertiserService = require("../services/AdvertiserService");

module.exports = {
  async login(req, res) {
    await AdvertiserService.login({ login: req.body, res });
  },
  async index(req, res) {
    await AdvertiserService.advertisers(req, res);
  },

  async store(req, res) {
    await AdvertiserService.create(req, res);
  },
};
