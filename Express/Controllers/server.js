
import express from 'express';
import postRoutes from './routes/postRoutes.js';

const app = express();
app.use(express.json());

app.use('/', postRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
