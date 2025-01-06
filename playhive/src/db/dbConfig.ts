import mongoose from 'mongoose';

export async function connectDB(){
     try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("MongoDB Connected");
        })

        connection.on("error",(error)=>{
            console.log("MongoDB Connection Error,Please make sure DB is up and running..",error);
            process.exit();
        }) 
    } catch (error) {
        console.log("Something went Wrong during connecting DB...");
        console.log(error);
    }
}