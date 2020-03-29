module.exports = (sequelize, Sequelize) =>{
    const Tweet = sequelize.define ("Tweet", {
        idTweet: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        tweet: {
            type: Sequelize.STRING,
            unique: true
        }
    }, {
        tableName: "tweets"
    });    
    return Tweet;
}
