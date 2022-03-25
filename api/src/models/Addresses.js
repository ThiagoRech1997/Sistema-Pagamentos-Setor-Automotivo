const { Model, DataTypes } = require('sequelize')

class Addresses extends Model {
    static init(sequelize) {
        super.init({
            street: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Addresses