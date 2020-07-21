const mongoose = require("mongoose");

const catergorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true } //it'll store data for createdAt and UpdatedAt and we can explicetely mention also
);

module.exports = mongoose.model("Catergory", catergorySchema);
