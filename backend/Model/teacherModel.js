import mongoose from "mongoose";
const teacherSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  contactNumber: {
    required: true,
    type: Number,
  },
  subject: {
    required: true,
    type: String,
  },
  pincode: {
    required: true,
    type: Number,
  },
  password: {
    required: true,
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
  loc: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  booked_date: [
    {
      date: Date,
      student: mongoose.Types.ObjectId,
    },
  ],
  students: [
    {
      student_id: mongoose.Types.ObjectId,
    },
  ],
});

teacherSchema.index({ loc: "2dsphere" });

const teacher = mongoose.model("teacher", teacherSchema);
export default teacher;
