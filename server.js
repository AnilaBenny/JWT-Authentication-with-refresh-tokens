const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes');
const secureRoutes = require('./routes/secureRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use(helmet());

app.use('/auth', authRoutes);
app.use('/api', secureRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
