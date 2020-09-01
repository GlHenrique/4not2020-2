const mongoose = require('mongoose');

module.exports = (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => console.log('Database Connected'));

  mongoose.connection.on('disconnected', () => console.log('Database Disconnect!!!'));

  process.on('SIGINT', () => mongoose.connection.close(() => {
    console.log('Exit application');
    process.exit(0);
  }));
};
