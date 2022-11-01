

module.exports=(sequelize,DataTypes) =>{

    let alias ="usuarioProducto";
    let cols ={
        id_user_product:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user:{
            type: DataTypes.INTEGER,
        },
        id_product:{
            type: DataTypes.INTEGER,
        }
        
    }
    let config ={
        tablename: "user_product",
        timestamps: false,

    }
    
    const usuarioProducto= sequelize.define(alias,cols,config);
    

    return usuarioProducto
}