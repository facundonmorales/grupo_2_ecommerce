module.exports=(sequelize,DataTypes) =>{

    let alias ="category";

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
    };

    let config ={
     
        tableName: "category",
        timestamps: false,
    }
    
    const category = sequelize.define(alias,cols,config);

    category.associate = function(models) {
        category.hasMany(models.products,{
            as:"products",
            foreignKey:"id_category"
        })
    
    }

    return category
}