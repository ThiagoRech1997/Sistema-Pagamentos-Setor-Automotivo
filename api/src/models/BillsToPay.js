const { Model, DataTypes } = require('sequelize')

class BillsToPay extends Model {
    static init(sequelize) {
        super.init({
            due_date: DataTypes.DATE,
            payment_date: DataTypes.DATE,
            total_purchase: DataTypes.DECIMAL,
            number_installments: DataTypes.STRING,
            installment_value: DataTypes.DECIMAL
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Purchases, { foreignKey: 'purchases_id', as: 'purchases'})
    }
}

module.exports = BillsToPay