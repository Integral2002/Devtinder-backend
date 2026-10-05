const crypto = require("crypto");

const generateRoomId = (userId1=1, userId2=2) => {
  // Make the room ID independent of user order
  const ids = [userId1, userId2].sort();

  const data = `${ids[0]}:${ids[1]}`;

  const roomId = crypto
    .createHmac("sha256", process.env.ROOM_SECRET)
    .update(data)
    .digest("hex");

  return roomId;
};

module.exports = { generateRoomId };