module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  });
  return Attendance;
};
