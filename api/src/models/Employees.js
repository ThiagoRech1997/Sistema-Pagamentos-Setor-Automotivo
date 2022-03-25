const { Model, DataTypes } = require('sequelize')

class Employees extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Addresses, { foreignKey: 'addresses_id', as: 'addresses' })
        this.belongsTo(models.Addresses, { foreignKey: 'cities_id', as: 'cities' })
        this.belongsTo(models.Addresses, { foreignKey: 'users_id', as: 'users' })
    }
}

module.exports = Employees