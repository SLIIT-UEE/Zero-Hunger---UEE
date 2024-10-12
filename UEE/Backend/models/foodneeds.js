const mongoose = require("mongoose");

const foodNeedSchema = new mongoose.Schema({
  foodItem: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  requiredDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: [
      "No volunteer assigned",
      "Volunteer assigned",
      "Food collected",
      "Food distributed",
    ], // Define the allowed statuses
    default: "No volunteer assigned", // Default status
  },
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
});

module.exports = mongoose.model("FoodNeed", foodNeedSchema);
