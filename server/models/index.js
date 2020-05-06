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

db.sync();
// db.sync({ force: true }); //to drop the tables (if changes on the models are made)

// Data relationships

db.User.belongsToMany(db.Event, { through: 'UsersEvents' });
db.Event.belongsToMany(db.User, { through: 'UsersEvents' });

db.Event.belongsToMany(db.Org, { through: 'EventsOrg' });
db.Org.belongsToMany(db.Event, { through: 'EventsOrg' });

db.Tag.belongsToMany(db.User, { through: 'TagsUsers' });
db.User.belongsToMany(db.Tag, { through: 'TagsUsers' });

db.Tag.belongsToMany(db.Org, { through: 'TagsOrgs' });
db.Org.belongsToMany(db.Tag, { through: 'TagsOrgs' });

db.Tag.belongsToMany(db.Event, { through: 'TagsEvents' });
db.Event.belongsToMany(db.Tag, { through: 'TagsEvents' });

module.exports = db;
