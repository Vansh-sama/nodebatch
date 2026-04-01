const express = require('express');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');

const indexRouter = require('./Router/index');
const loginRouter = require('./Router/login');

const port = 3000;


app.use(cors());           
app.use(express.json());  

app.use("/", indexRouter);
app.use('/api', loginRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});