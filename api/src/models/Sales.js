const { Model, DataTypes } = require('sequelize')

class Sales extends Model {
    static init(sequelize) {
        super.init({
            finalPrice: DataTypes.DECIMAL,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Clients, { foreignKey: 'clients_id', as: 'clients' })
        this.belongsTo(models.Products, { foreignKey: 'products_id', as: 'products' })
    }
}

module.exports = Sales