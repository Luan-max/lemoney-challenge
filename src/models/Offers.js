const { DataTypes, Model } = require("sequelize");

class Offers extends Model {
  static init(sequelize) {
    super.init(
      {
        advertiser_name: DataTypes.STRING,
        url: DataTypes.STRING,
        description: DataTypes.STRING,
        startAt: DataTypes.DATE,
        endsAt: DataTypes.DATE,
        state: DataTypes.BOOLEAN,
        premium: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Advertiser, {
      foreignKey: "advertiser_id",
      as: "advertiser",
    });
  }
}

module.exports = Offers;
