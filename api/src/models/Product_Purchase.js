const { Model, DataTypes } = require('sequelize')

class Product_Purchase extends Model {
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

module.exports = Product_Purchase