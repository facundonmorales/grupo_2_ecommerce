

module.exports=(sequelize,DataTypes) =>{

    let alias ="categorys";
    let cols ={
       id_category:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       },
       nombre:{
        type: DataTypes.STRING,
       },
       descripcion:{
        type: DataTypes.STRING,
       }

       
        
    }
    let config ={
        tablename: "category",
        timestamps: false,

    }
    
    const categorys= sequelize.define(alias,cols,config);
    

    return categorys
}