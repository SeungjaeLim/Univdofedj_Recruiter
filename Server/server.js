const express = require('express');
const cors = require('cors');
const app = express();

const authRouter = require('./router/auth.js')
const memberRouter = require('./router/member.js')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 8080);

app.use('/auth',authRouter);
app.use('/member',memberRouter);

app.get('/', (req, res) => {
    console.log('root');
    res.send('root');    
});
  

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});