module.exports = (sequelize, Sequelize) =>{
    const Post = sequelize.define ("Post", {
        idPost: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        message: Sequelize.STRING,
        published_date: Sequelize.DATE(6),
        idUser: {type: Sequelize.INTEGER} 
    }, {
        tableName: "posts"
    });
    return Post;
}
