const User = require('../models/user.model');

// Simple version, without validation or sanitation

// Create an item in database
exports.user_create = (req, res, next) => {
    let user = new User({
        userName: req.body.name,
        userIP: req.body.ipaddress,
        userClickedLinks: [{
            linkUrl: req.body.url,
            linkDuration: req.body.duration
        }]
    });

    user.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Product Created Successfully');
    })
    console.log("Hey");
}