const { Model, DataTypes } = require('sequelize')

class Cities extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            uf: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Cities