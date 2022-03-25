const { Model, DataTypes } = require('sequelize')

class Products extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            amount: DataTypes.INTEGER,
            value: DataTypes.DECIMAL,
        },{
            sequelize
        })
    }
}

module.exports = Products