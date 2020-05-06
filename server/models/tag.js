module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Tag;
};
