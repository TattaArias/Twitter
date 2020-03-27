module.exports = (sequelize, Sequelize) =>{
    const follower = sequelize.define ("follower", {
        idFollower: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        followername: { type: Sequelize.STRING } ,
        creation_date: Sequelize.DATE,
    }, {
        tableName: "followers"
    });    
    
    return follower;
}
