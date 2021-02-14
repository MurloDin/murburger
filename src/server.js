const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const Food = require('./models/food/food.item');
const bodyParser = require("body-parser");
const Order = require('./models/orders/order.item')
const Comment = require('./models/comments/comment.item')



const app = express();
const port = 8000;

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/murburger', {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
    });
    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);

    app.use('/uploads', express.static('uploads'));
    app.use(admin.options.rootPath, router);
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/api/food', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        Food.find({}, (err, food) => {
            res.send(food);
        });
    });

    app.get('/api/comments', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        Comment.find({}, (err, comments) => {
            res.send(comments);
        });
    });

    app.post('/api/order', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader("Access-Control-Allow-Origin", "*")
        const {values, order, total} = req.body;
        const newOrder = new Order({
            ...values,
            items: order,
            total: total,
        })
        newOrder.save();
        res.send('okey')
    })

    app.post('/api/new-comment', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader("Access-Control-Allow-Origin", "*")
        const values = req.body;
        console.log(values);
        const newComment = new Comment({
            ...values,
        })
        newComment.save();
        res.send('okey')
    })

    app.listen(port, () => console.log(`сервер запущен на http://localhost:${port}`,));
};

module.exports = run;
