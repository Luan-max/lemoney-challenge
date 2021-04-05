const OffersRepository = require("../repositories/OffersRepository");
const validSchema = require("../utils/validateSchema");
const Advertiser = require("../models/Adverstiser");
const Offers = require("../models/Offers");

class OffersService {
  async create(req, res) {
    const schema = req.body;
    const { advertiser_id } = req.params;

    const validation = await validSchema(schema, [
      "description",
      "advertiser_name",
      "url",
      "startAt",
    ]);

    if (validation.error) {
      return res.status(400).json({ error: "Required fields!" });
    }

    const advertiser = await Advertiser.findByPk(advertiser_id);

    if (!advertiser) {
      return res.status(400).json({ message: "User not found!" });
    }

    const createOffer = await OffersRepository.store(schema);

    return res.status(201).json({ createOffer, advertiser_id });
  }

  async index(req, res) {
    const { advertiser_id: id } = req.params;

    const advertiser = await Advertiser.findByPk(id);

    if (!advertiser) {
      return res.status(400).json({ message: "User not found!" });
    }

    const offersOfAdvertiser = await OffersRepository.index(id);

    return res.status(200).json({ offersOfAdvertiser });
  }

  async update(req, res) {
    const { offer_id: id } = req.params;
    const schema = req.body;

    const offer = await Offers.findByPk(id);

    if (!offer) {
      return res.status(400).json({ message: "Offer not found!" });
    }

    const offerUpdated = await OffersRepository.updated(schema, id);

    return res.status(200).json({
      offerUpdated,
      message: "Offer updated with successfully!",
    });
  }

  async offers(req, res) {
    const offers = await OffersRepository.allOffers();

    return res.status(200).json({ offers });
  }

  async destroy(req, res) {
    const { offer_id: id } = req.params;

    const offer = await Offers.findByPk(id);

    if (!offer) {
      return res.status(400).json({ message: "Offer not found!" });
    }

    const offerDeleted = await OffersRepository.delete(id);
    return res.status(200).json({
      offerDeleted,
      offer,
      message: "Offer deleted with successfully!",
    });
  }
}

module.exports = new OffersService();
