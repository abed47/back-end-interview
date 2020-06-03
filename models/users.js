"use strict";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
            unique: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        phone:{
            type: DataTypes.INTEGER,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            unique: false
        },
        zip_code: {
            type: DataTypes.STRING,
            unique: false
        },
        photo_url: {
            type: DataTypes.STRING,
            unique: false
        }

    })


    return User;
}