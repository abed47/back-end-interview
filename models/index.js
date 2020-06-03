import Sequelize from 'sequelize';

const sequelize = new Sequelize('interview_test','root','root',{
    dialect: "mysql"
});

const models = {
    user: sequelize.import('./users'),
};

models.sequelize = sequelize;

export default models;