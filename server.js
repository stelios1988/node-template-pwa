// Libraries
const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const socketio      = require('socket.io');
const multer        = require('multer');
const path          = require('path');
require('dotenv').config();

// Config multer destination path
//global.upload = multer({ dest: 'frontend/uploads/' });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'frontend/uploads/');
    },
    filename: function (req, file, cb) {
        let parts = path.parse(file.originalname);
        cb(null, parts.name+'-'+Date.now()+parts.ext);
    }
});
global.upload = multer({ storage: storage });

// Include Config files
require('./backend/config/database');
require('./backend/config/mail');

// Load Models, Controllers, Middlewares
require('./backend/models/loadModels');
require('./backend/controllers/loadControllers');
require('./backend/middlewares/loadMiddlewares');

// Include routes
const mainRoutes = require('./backend/routes/routes');

// App Initialization
const app = express();

// Initialize Sockets && app listen
global.io = socketio(app.listen(process.env.PORT || 3000));

// Middlewares
app.use(cors());
app.use(express.static('frontend'));
app.use(bodyParser.json());

// Backend Routes
app.use('/api', mainRoutes);

// Frontend Route
app.get('**', function(req, res){
    res.sendFile(__dirname+'/frontend/index.html');
});