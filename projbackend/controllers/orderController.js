const {Order, ProductCart} = require('../models/orderModel');

// order by Id
exports.getOrderById = (req, res, next, id) => {
    Order.findbyId(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
        if (err) {
            return res.status(400).json({
                err: "Order not found"
            });
        }
        req.order = order;
        next();
    });
};

// create order

exports.createOrder = (req, res) => {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    order.save((err, order) => {
        if (err) {
            return res.status(400).json({
                err : "Failed to save your order"
            });
        }
        res.json(order);
    });
};

// get all order

exports.getAllOrders = (req, res) => {
    Order.find()
    .populate("user", "_id firstName lasttName mobileNumber email")
    .exec((err, orders) => {
        if (err) {
            return res.status(400).json({
                err: "Order not found"
            });
        }
        res.json(orders)
    });
};

// to get order status
exports.getOrderStatus = (req, res) => {
    res.json(Order.schema.path("status").enumValues);
};

// to update order status
exports.updateOrderStatus = (req, res) => {
    Order.update(
        {_id: req.body.orderId},
        { $set: {status: req.body.status} },
        (err, order) => {
            if (err) {
                return res.status(400).json({
                    err: "Cannot update order status"
                })
            }
            res.json(order);
        }      
    );
}; 