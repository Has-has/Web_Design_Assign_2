const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Marketplace', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
res.send('Welcome to the Marketplace API');
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);