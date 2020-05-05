module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    event_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    org_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  });

  return Tag;
};
