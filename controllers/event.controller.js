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

// Batch Insert a bulk of data
exports.event_batch_add = (req, res, next) => {
    Event.insertMany(req.body, (error, events) => {
        if (error) {
            console.log(`Error is ${error}`);
            next(error);
        } else
            res.send("Event Info Inserted Successfully!");
    });

}

// Group Event Info by URL
exports.event_group_url = (req, res, next) => {
    const urlSequence = ["home", "test", "build", "network", "release", "dev", "sale", "bank", "state", "street", "coffee", "chart"];
    const data = {};

    urlSequence.forEach((url) => {
        console.log(url);
        Event.find({
            "url": url
        }, function (error, result) {
            if (error) {
                next(error);
            } else {
                data[url] = result.length;
                console.log(data);
            }
        })
    });
}