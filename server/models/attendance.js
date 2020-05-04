module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    event_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  }) 
  return Attendance;
};
