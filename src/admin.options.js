const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose')

const UserAuth = require('./models/users/user.auth');
const FoodOptions = require('./models/food/food.options');
const OrderOptions = require('./models/orders/order.options');
const Comment = require('./models/comments/comment.item')

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [UserAuth, FoodOptions, OrderOptions, Comment],
};


module.exports = options;

