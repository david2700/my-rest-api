import "dotenv/config";
import { connectDB } from "./config/database.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3000;

// Tasks: 
// 1. Add a database to this.
// 2. setup a mongodb, perform CRUD operation db
// 5. Expand on this make a github
// 6. Research Github actions

// Install nodemon and configure it to start the server on save
// Complete the CRUD operations for all the modules

//what am I trying to make here:
//personal finance management system
//takes a user, allows a user to log in and register 
//authenticates a user
//presents the user's data in a presentable format on the dashboard, they have options to do certain things like
//report button to keep track of transactions

(async () => {
    await connectDB();
    //run the server
    app.listen(PORT, () => {
        console.log(`server is running ON PORT ${PORT}`)
    });
})();


