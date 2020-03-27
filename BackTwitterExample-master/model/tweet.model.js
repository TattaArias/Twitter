module.exports = (sequelize, Sequelize) =>{
    const tweet = sequelize.define ("tweet", {
        idTweet: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        tweetname: { type: Sequelize.STRING } ,
        creation_date: Sequelize.DATE,
    }, {
        tableName: "tweets"
    });    
    
    return tweet;
}
