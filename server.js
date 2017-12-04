// Libraries
const express       = require('express');
const cors          = require('cors');
const socketio      = require('socket.io');
require('dotenv').config();

// Include Config files
require('./backend/config/database');
require('./backend/config/mail');

// Load Controllers
require('./backend/models/loadModels');
require('./backend/controllers/loadControllers');
require('./backend/middlewares/loadMiddlewares');

// Include routes
const mainRoutes = require('./backend/routes/routes');

// App Initialization
const app = express();

// Initialize Sockets && app listen
global.io = socketio(app.listen(process.env.PORT || 3000));

app.use(cors());
app.use(express.static('frontend'));

// Backend Routes
app.use('/api', mainRoutes);

// Frontend Route
app.get('**', function(req, res){
    res.sendFile(__dirname+'/frontend/index.html');
});