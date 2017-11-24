const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/db_test';

const t1 = new Date();
mongoose.connect(mongoUrl).then(() => {
        const t2 = new Date();
        console.log("time to connect", t2 - t1, "ms");
    },
    err => {
        console.log(" /** handle initial connection error */ ");
    }
);

