

module.exports=(sequelize,dataTypes) =>{

    let alias= "users";
    let cols= {
        id_user:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        } , 
        nombre:{
            type: dataTypes.STRING,

        },
        apellido:{
            type: dataTypes.STRING,

        },
        telefono:{
            type: dataTypes.DECIMAL,

        },
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,

        },
        imagen:{
            type: dataTypes.STRING,


        },
        roll_id:{
            type: dataTypes.INTEGER,

        },  

    };
    let config={
        tablename: "users",
        timestamps: false,
    }



    const users= sequelize.define(alias,cols,config);
    

    return users
}