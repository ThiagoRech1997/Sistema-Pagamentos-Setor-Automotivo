const { Model, DataTypes } = require('sequelize')

class ProductPurchase extends Model {
    static init(sequelize) {
        super.init({
            unitary_value: DataTypes.DECIMAL,
            amount: DataTypes.INTEGER
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Purchases, { foreignKey: 'purchases_id', as: 'purchases' })
        this.belongsTo(models.Products, { foreignKey: 'products_id', as: 'products' })
    }
}

module.exports = ProductPurchase