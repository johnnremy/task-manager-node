const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://johnremy_mdb:J8X0R3NNjULasGFu@development.18xsvvq.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) =>{
return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
}

module.exports = connectDB