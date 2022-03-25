const { Model, DataTypes } = require('sequelize')

class Providers extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cnpj: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Addresses, { foreignKey: 'addresses_id', as: 'addresses' })
        this.belongsTo(models.Addresses, { foreignKey: 'cities_id', as: 'cities' })
    }
}

module.exports = Providers