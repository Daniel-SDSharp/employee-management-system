// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import employeesController from './controllers/employeesController';

const app = express();
app.use(bodyParser.json());

app.use('/api', employeesController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
