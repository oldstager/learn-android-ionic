import express from 'express';
import cors from 'cors';
import { PORT } from './config/constants';
import { mhsRouter } from './routes';
import { dosenRouter } from './routes';

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Selamat datang di RESTful API gateway - SI Akademik');
});

app.use('/mhs', mhsRouter);
app.use('/dosen', dosenRouter);

app.listen(PORT, () => {
    console.log(`Endpoint Akademik sudah siap dan bisa diakses di port ${PORT}`);
});
