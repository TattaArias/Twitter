const dbManager = require ('../database.config/db.manager');
/**
 * Creation of an post
 * @param {*} postObject JSON Object with User information
 */
async function createPost (req, res) {   
    console.log("Entra");
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newPostObject = {// CREATING THE OBJECT TO PERSIST
        message: req.body.message,
        published_date: req.body.published_date
    }
    dbManager.Post.create(newPostObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get all posts
 */
async function findAllPosts (req, res){
    try {
        const posts = await dbManager.Post.findAll (); //Execute query
        res.json({ data: posts });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Get post by id
 */
async function findOnePost (req, res){
    try {
        const { idPost } = req.params;
        const post = await dbManager.Post.findOne({ where: { idPost: idPost }//Execute query
        });
        res.json(post);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update post
 */
async function updatePost (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newPostObject = {// CREATING THE OBJECT TO PERSIST
        message: req.body.message,
        published_date: req.body.published_date
    }
    const { idPost } = req.params;//Execute query
    dbManager.Post.update(newPostObject, { where: { idPost: idPost } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newPostObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

/**
 * Delete an existen post by username
 * @param {*} req 
 * @param {*} res 
 */
function deletePostByUsername (req, res){ 
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function deleteAllPosts (req, res){
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function findAllPostsByCreatedDate (req, res){
}

exports.createPost = createPost; 
exports.findAllPosts = findAllPosts; 
exports.findOnePost = findOnePost; 
exports.updatePost = updatePost;
exports.deletePostByUsername = deletePostByUsername;
exports.deleteAllPosts = deleteAllPosts;
exports.findAllPostsByCreatedDate = findAllPostsByCreatedDate;
