const { Router } = require("express");

const AdvertiserController = require("../controllers/AdvertiserController");
const OffersController = require("../controllers/OffersController");
const authController = require("../middlewares/auth");
const routes = Router();

routes.get("/advertisers", AdvertiserController.index);
routes.post("/advertisers", AdvertiserController.store);
routes.post("/login", AdvertiserController.login);

routes.post(
  "/advertiser/:advertiser_id/offers",
  authController,
  OffersController.store
);
routes.get(
  "/advertiser/:advertiser_id/offers",
  authController,
  OffersController.index
);
routes.get("/advertiser/offers", OffersController.allOffers);
routes.put(
  "/advertiser/:advertiser_id/offers/:offer_id",
  OffersController.update
);
routes.delete(
  "/advertiser/:advertiser_id/offers/:offer_id",
  OffersController.destroy
);

module.exports = routes;
