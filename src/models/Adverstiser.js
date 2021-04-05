const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcryptjs");

class Advertiser extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        isLogged: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        hooks: {
          beforeCreate: (advertiser) => {
            const salt = bcrypt.genSaltSync();
            advertiser.password = bcrypt.hashSync(advertiser.password, salt);
          },
        },
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Offers, { foreignKey: "advertiser_id", as: "offers" });
  }
}

module.exports = Advertiser;
