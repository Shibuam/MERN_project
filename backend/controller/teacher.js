import asyncHandler from "express-async-handler";
import teacherModel from "../Model/teacherModel.js";
import bcrypt from "bcrypt";
import generateToken from "../util/generateToken.js"; // import jwt from 'jsonwebtoken'
import { cloudinaryConfig } from "../util/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import student from "../Model/studentModel.js";

export const teacherRegisterHandler = asyncHandler(async (req, res) => {
  let { name, email, contactNumber, subject, pincode, password } = req.body;

  console.log(client);

  console.log(req.body);
  password = await bcrypt.hash(password, 10);

  const teacher = await teacherModel.findOne({ email });

  client.verify.services
    .create({ friendlyName: "My First Verify Service" })
    .then((service) => console.log(service.sid));

  if (teacher) {
    throw new Error("email already exist");
  } else {
    const teacher = await teacherModel.create({
      name: name,
      email: email,
      contactNumber: contactNumber,
      subject: subject,
      pincode: pincode,
      password: password,
    });

    console.log("successfully inserted", teacher);
    res.json({
      teacher,
      token: generateToken(teacher),
    });
  }
});
export const teacherProfile = asyncHandler(async (req, res) => {
  try {
    let { imageAddress } = req.body;

    const teacher = await teacherModel.findById(req.user._id);

    const { secure_url } = await cloudinary.uploader.upload(imageAddress, {
      folder: "ProfileImage",
    });
    console.log("secure_url", secure_url);
    teacher.image = secure_url;
    await teacher.save();
    res.json(teacher);
  } catch (error) {
    console.log(error);
  }
});

export const getTeacherProfileImage = asyncHandler(async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder: ProfileImage")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.url);
  res.send(publicIds);
});

export const teacherInformation = (req, res) => {
  let teacherDetails = req.user;
  res.json({
    teacherDetails,
  });
};
export const updateVideo = asyncHandler(async (req, res) => {
  const teacher = await teacherModel.findById(req.user._id);
  teacher.video = req.body.videoLink;
  await teacher.save();

  res.json(teacher);
});

export const studentDetails = asyncHandler(async (req, res) => {
  console.log("student Details");

  let studentDetails = await student.findById(req.params.student);

  res.json({ studentDetails });
});

export const location = async (req, res) => {
  try {
    const teacher = await teacherModel.findById(req.user._id);
    teacher.loc.coordinates = req.body.coordinates;

    teacher.save();
    res.json(teacher);
  } catch (err) {
    console.log(err);
  }
};
