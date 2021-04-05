const AdvertiserRepository = require("../repositories/AdvertisersRepository");
const validSchema = require("../utils/validateSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

const REGEX_FOR_VALIDATE_EMAIL = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function token(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 60000,
  });
}

class AdvertiserService {
  async create(req, res) {
    const schema = req.body;
    const validation = await validSchema(schema, ["name", "email", "password"]);

    if (validation.error) {
      return res.status(400).json({ error: "Required fields!" });
    }

    if (REGEX_FOR_VALIDATE_EMAIL.test(schema.email) === false) {
      return res.status(400).json({ error: "The email must be valid!" });
    }

    const { email } = schema;

    const [advertiserExists] = await AdvertiserRepository.getAdvertiser(email);

    if (advertiserExists) {
      return res
        .status(400)
        .json({ message: "Advertiser already exists!", advertiserExists });
    }

    const createUser = await AdvertiserRepository.store(schema);

    const generateToken = token({ id: createUser.id });

    return res.status(201).json({ createUser, generateToken });
  }

  async advertisers(req, res) {
    const advertisers = await AdvertiserRepository.allAdvertisers();

    return res.status(200).json({ advertisers });
  }

  async login({ login, res }) {
    const { email, isLogged } = login;

    const advertiser = await AdvertiserRepository.login(email);

    if (!advertiser) {
      res.status(404).json({ error: "User not found!" });
    }

    if (!bcrypt.compareSync(login.password, advertiser.password)) {
      res.status(404).json({ error: "Password incorrect!" });
    }

    const { id } = advertiser;

    await AdvertiserRepository.updateAdvertiser(isLogged, id);

    login.password = undefined;

    const generateToken = token({ id: id });

    return res.status(200).json({ login, generateToken });
  }
}

module.exports = new AdvertiserService();
