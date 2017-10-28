const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');


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

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
