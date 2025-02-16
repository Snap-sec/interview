const express = require('express');
const connectDB = require('../config/database');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 