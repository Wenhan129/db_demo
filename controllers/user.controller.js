const User = require('../models/user.model');

// Simple version, without validation or sanitation

// Create an item in database
exports.user_create = (req, res, next) => {
    let remoteIp = (req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress).split(",")[0];
    console.log(ip);
    let user = new User({
        user_name: req.body.name,
        user_ip: remoteIp,
    });

    // Push the link info to the database
    user.user_clicked_links.push({
        link_url: req.body.url,
        link_duration: req.body.duration
    });

    user.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('User Info Created Successfully');
    });
};

// Read the info in database from given id
exports.user_details = (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
        if (err)
            return next(err);
        res.send(user);
    })
}


// Update the link info to the database
exports.user_update = (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) {
            return next(err);
        }
        user.user_clicked_links.push({
            linkrl: req.body.url,
            linkDuration: req.body.duration
        });
        user.save((err) => {
            if (err) {
                return next(err);
            }
            res.send('User Info Updated Successfully!');
        });
    });
};

// Delete the user info in the database by given id
exports.user_delete = (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndRemove(id, (err) => {
        if (err) {
            return next(err);
        }
        res.send('User Info Deleted Successfully!');
    });
}