module.exports = (sequelize, dataTypes) => {

    let alias = "products"

    let cols = {
        id_product: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        caracteristicas: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.DECIMAL
        },
        imagen: {
            type: dataTypes.STRING
        },
        id_category: {

            type: dataTypes.INTEGER
        }
    };

    let config = {

        tableName: "product", // nombre de la tabla
        timestamps: false // 
    }
    const product = sequelize.define(alias, cols, config);

    product.associate = function(models) {
        product.belongsTo(models.category,{
            as:"category",
            foreignKey:"id_category"
        })

    }

    return product;


}