//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database.config/db.connection.js');

//IMPORT MODELS
const FollowerModel = require("../model/follower.model");
const PostModel = require("../model/post.model");
const TweetModel = require("../model/tweet.model");
const UserModel = require("../model/user.model");

//INITIALIZE MODELS
const Follower = FollowerModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);
const Tweet = TweetModel (sequelizeConnection, Sequelize);
const User = UserModel (sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
User.hasMany(Post, { foreignKey: 'idUser', sourceKey: 'idUser' });
Post.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idUser' });

User.hasMany(Follower, { foreignKey: 'idUser', sourceKey: 'idUser' });
Follower.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idUser' });


//GROUP MODELS
const models = {
  Follower: Follower,
  Post: Post,
  Tweet: Tweet,
  User: User
};


/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
  
// EXPORT CONSTANT DB
module.exports = db;
