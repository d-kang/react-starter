import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
  res.send('Hello World Test!');
});


app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
