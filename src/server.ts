import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.listen(PORT, (): void => {
  console.log(`server started on port: ${PORT}`)
});