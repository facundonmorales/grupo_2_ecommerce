

module.exports=(sequelize,DataTypes) =>{

    let alias ="rolluser";
    let cols ={
        id_roll:{
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,

        },
        nombre:{
            type: DataTypes.STRING,
        }
    }
    let config ={
        tablename: "roll_user",
        timestamps: false,

    }
    
    const rolluser= sequelize.define(alias,cols,config);
    

    return rolluser
}