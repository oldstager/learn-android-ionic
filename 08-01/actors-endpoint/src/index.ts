import express from 'express';
import cors from 'cors';
import { PORT } from './config/constants';
import { actorsRouter } from './routes';

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Selamat datang di Actors - RESTful API gateway');
});
app.use('/actors', actorsRouter);

app.listen(PORT, () => {
    console.log(`Endpoint Actors sudah siap dan bisa diakses di port ${PORT}`);
});
