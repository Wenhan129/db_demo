const Event = require('../models/event.model');

// Create an event item in database
exports.event_create = (req, res, next) => {
    let remoteIp = (req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress).split(",")[0];

    let event = new Event({
        start_time: req.body.start_time,
        duration: req.body.duration,
        ending_time: req.body.ending_time,
        url: req.body.url,
        ip: remoteIp
    });

    event.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Event Info Created Successfully');
    });
};

// Get an event item by given id
exports.event_details = (req, res, next) => {
    Event.findById(req.params.id, (err, event) => {
        if (err)
            return next(err);
        res.send(event);
    })
}

// Update an event item by given id
exports.event_update = (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        (err) => {
            if (err)
                return next(err);
            res.send('Event Info Updated Successfully!');
        }
    );
};

// Delete an event item by given id
exports.event_delete = (req, res, next) => {
    let id = req.params.id;
    Event.findByIdAndRemove(id, (err) => {
        if (err)
            return next(err);
        res.send('Event Info Deleted Successfully!');
    });
}