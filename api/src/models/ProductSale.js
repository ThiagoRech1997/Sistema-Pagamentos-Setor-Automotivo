const { Model, DataTypes } = require('sequelize')

class ProductSale extends Model {
    static init(sequelize) {
        super.init({
            unitary_value: DataTypes.DECIMAL,
            amount: DataTypes.INTEGER
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Sales, { foreignKey: 'sales_id', as: 'sales' })
        this.belongsTo(models.Products, { foreignKey: 'products_id', as: 'products' })
    }
}

module.exports = ProductSale