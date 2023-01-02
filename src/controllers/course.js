require("../connection");
const Course = require("../models/Course");

export const createCourse = async (title, category, description, id) => {
  const course = new Course({
    title,
    category,
    description,
    students: [],
    id,
  });

  return await course.save();
};

export const addStudentToCourse = async (courseId, studentId) => {
  const course = await Course.findOne({ id: courseId });
  if (course) {
    course.students.push(studentId);
    return await course.save();
  }
};

export const getAllCourse = async () => {
  const courses = await Course.find();

  return courses;
};

export const getCourseById = async (id) => {
  const course = await Course.findOne({ id: id });
  return course;
};

export const courseDetele = async (id) => {
  const result = await Course.findByIdAndDelete(id);
  return result;
};

export const courseUpdate = async (title, category, description, id) => {
  console.log(id,'swdw')

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      title,
      category,
      description,
    },
    { new: true }
  );

  return course
};
