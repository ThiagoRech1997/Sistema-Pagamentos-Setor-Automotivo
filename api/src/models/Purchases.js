const { Model } = require('sequelize')

class Purchases extends Model {
    static init(sequelize) {
        super.init({
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Providers, { foreignKey: 'providers_id', as: 'providers' })
    }
}

module.exports = Purchases