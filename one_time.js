const axios = require('axios');
const urlSequence = ["home", "test", "build", "network", "release", "dev", "sale", "bank", "state", "street", "coffee", "chart"];

let lengthUrlSequence = urlSequence.length;
let eventList = [];

// Send 1000 queris of fake data to the database
for (let i = 0; i < 1000; i++) {
    let rndStart = Math.floor(Math.random() * 1000);
    let rndDuration = Math.floor(Math.random() * 100);
    let rndEndTime = rndStart + rndDuration;
    let rndIdx = Math.floor(Math.random() * lengthUrlSequence);
    let rndUrl = urlSequence[rndIdx];

    eventList.push({
        start_time: rndStart,
        ending_time: rndEndTime,
        url: rndUrl,
        duration: rndDuration
    });
}

let batchPost = () => {
    axios.post("http://localhost:1031/event/batch", eventList).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    })
};

batchPost();