import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import app from "./app.js";  // Import app.js

dotenv.config({
    path: './.env'
});

connectDB()
.then(() => {
    app.on('error', (error) => {
        console.error("Error: ", error);
        throw new Error(error);
    });

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(error => console.error('MongoDB Connection Failed: ', error));
