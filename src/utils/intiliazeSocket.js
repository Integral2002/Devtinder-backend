
const { Server } = require("socket.io");
const {generateRoomId}=require("./socketRoomIdGenerator")
const intializeSocket=(server)=>{

const io=new Server(server,
{
 cors: {
   origin: "http://localhost:5173",
  }
}
)


io.on("connection",(socket)=>{
console.log("Connection is Successfull with sokcet id: "+socket?.id)


socket.on("disconnect",()=>{
console.log("Socket with Id : "+socket?.id+" is disconnected ")
})

socket.on("join-chat",({ userId, otherUserId })=>{


     const roomId = generateRoomId(
                userId,
                otherUserId
            );
            socket.join(roomId);

 console.log(
                `Socket ${socket.id} joined room ${roomId}`
            );
})






socket.on("send-message", (data) => {

    const roomId=generateRoomId(data.userId,
        data.receiverId)
          socket.to(roomId).emit("new-message", {
        message: data.message
    });

});


})




}

module.exports={intializeSocket}