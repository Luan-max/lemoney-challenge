const Offers = require("../models/Offers");
const Advertiser = require("../models/Adverstiser");

class OffersRepository {
  async index(id) {
    return await Advertiser.findByPk(id, {
      include: { association: "offers" },
    });
  }
  async allOffers() {
    return await Offers.findAll();
  }
  async store(schema) {
    return await Offers.create(schema);
  }
  async delete(id) {
    return await Offers.destroy({ where: { id } });
  }
  async updated(schema, id) {
    const {
      advertiser_name,
      description,
      state,
      startAt,
      endsAt,
      premium,
      advertiser_id,
    } = schema;
    return await Offers.update(
      {
        advertiser_name,
        description,
        state,
        startAt,
        endsAt,
        premium,
        advertiser_id,
      },
      { where: { id } }
    );
  }
}

module.exports = new OffersRepository();
