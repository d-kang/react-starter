import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4500;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(process.env.PWD, 'public')));


app.get('/test', (req, res) => {
  res.send('Hello World Test!');
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'public'));
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
