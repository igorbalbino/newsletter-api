import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

//instancia express
const app = express();

//conecta no banco de dados
mongoose.connect('mongodb://localhost/firstapp');

//passa a usar o parser de json do express
app.use(express.json());
app.use(routes);

app.listen(/*porta*/3000, /*callback*/() => {
    console.log('Server running and listening. Port: 3000 \n\n')
});