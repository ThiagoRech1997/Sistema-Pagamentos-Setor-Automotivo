const { Model, DataTypes } = require('sequelize')

class Purchases extends Model {
    static init(sequelize) {
        super.init({
            finalPrice: DataTypes.DECIMAL,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Providers, { foreignKey: 'providers_id', as: 'providers' })
    }
}

module.exports = Purchases