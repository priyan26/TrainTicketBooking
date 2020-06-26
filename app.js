const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const expressValidator =require('express-validator')
const path = require('path')

require('dotenv').config()

//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/train');
const braintreeRoutes = require('./routes/braintree');

//app
const app = express();

//db connection
mongoose.connect(
    process.env.MONGODB_URI,
    {useNewUrlParser: true}
)
    .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",braintreeRoutes);

const port = process.env.PORT || 8000;

if(process.env.NODE_ENV){
    app.use(express.static('./frontend/build'))

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, './frontend/build/index.html'), function(err) {
            if (err) {
                res.status(500).send(err)
            }
        })
    })

}

app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
});