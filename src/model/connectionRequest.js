const mongoose = require("mongoose");
const { Schema } = mongoose;

const connectionRequestSchema = new Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    status: {
      type: String,
      enum: {
        values: ["interested", "ignored", "rejected", "accepted"],
        message: "Invalid status",
      },
    },
  },
  {
    timestamps: true,
  },
);

connectionRequestSchema.index({
  fromUserId: 1,
  toUserId: 1
});

connectionRequestSchema.pre("save", async function () {
  const fromUserId = this.fromUserId;
  const toUserId = this.toUserId;

  const isExistingRequest = await ConnectionRequestModel.findOne({
    $or: [
      { fromUserId: fromUserId, toUserId: toUserId },
      { fromUserId: toUserId, toUserId: fromUserId },
    ],
  });
  if (isExistingRequest) {
    throw new Error("Invalid Request");
  }
});

const ConnectionRequestModel = mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema,
);

module.exports = ConnectionRequestModel;
