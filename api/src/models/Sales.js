const { Model } = require('sequelize')

class Sales extends Model {
    static init(sequelize) {
        super.init({
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Clients, { foreignKey: 'clients_id', as: 'clients' })
    }
}

module.exports = Sales