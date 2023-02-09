const mongoose = require('mongoose');
//Disabling strict query flag
mongoose.set('strictQuery', false)

const connectDB = async () => {
    
    try {
        // Connecting to MongoDB
        const conn = await mongoose.connect(process.env.DB_STRING, { 
            useUnifiedTopology: true,
            useNewURLParser: true,
        })
        
        // console.log('DB connected');  
        console.log(`connected to database: ${conn.connection.host}`);
    
    } catch (error) {
        console.error(error);
        process.exit(1);
    }



}

module.exports = connectDB;