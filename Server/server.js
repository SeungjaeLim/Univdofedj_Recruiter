const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const authRouter = require('./router/auth.js')
const memberRouter = require('./router/member.js')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/auth',authRouter);
//app.use('/member',memberRouter);

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});