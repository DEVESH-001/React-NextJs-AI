const { default: mongoose } = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      maxLength: [50, "Email cannot exceed 50 characters"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      lowercase: true,
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxLength: [100, "Subject cannot exceed 100 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxLength: [500, "Message cannot exceed 500 characters"],
    },
  },
  { timeStamp: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

module.exports = Contact;
