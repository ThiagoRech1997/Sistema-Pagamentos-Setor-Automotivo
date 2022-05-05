const { Model, DataTypes } = require('sequelize')

class BillsToReceive extends Model {
    static init(sequelize) {
        super.init({
            due_date: DataTypes.DATE,
            payment_date: DataTypes.DATE,
            total_sale: DataTypes.DECIMAL,
            number_installments: DataTypes.STRING,
            installment_value: DataTypes.DECIMAL
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Sales, { foreignKey: 'sales_id', as: 'sales'})
    }
}

module.exports = BillsToReceive