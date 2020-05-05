const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config();
const basename = path.basename(__filename);

const db = new Sequelize(
  process.env.PSQL_DB_NAME,
  process.env.PSQL_DB_USER,
  process.env.PSQL_DB_PASSWORD,
  {
    host: process.env.PSQL_DB_HOST,
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

db.authenticate()
  .then(() => {
    console.log('** database connected **');
  })
  .catch((err) => {
    console.error('! database connection error !', err);
  });

// readDirSync reads files in models folder

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = db.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sync(); //! db.sync({force:true}) to drop the tables (if changes on the models are made)


db.User.hasMany(db.Tag)

module.exports = db;
