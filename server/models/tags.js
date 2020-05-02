module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tagName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    orgId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  });
  return Tag;
};
