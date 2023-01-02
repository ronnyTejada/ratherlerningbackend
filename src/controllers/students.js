import { addStudentToCourse } from "./course";

require("../connection");
const Student = require("../models/Student");

export const createStudent = async (student) => {
  let { name, email, age, id, courseId,gender,siblings } = student;
  const newStudent = new Student({
    name,
    email,
    age,
    id,
    courseId,
    gender,
    siblings
  });

  addStudentToCourse(courseId, id);
  addSibling(siblings,id)
  return await newStudent.save();
};


const addSibling=async(siblings,currentStudent)=>{
  siblings.map(async item =>{
    let student = await Student.findOne({id:item})
    student.siblings.push(currentStudent)
    await student.save()

  })
}

export const getStudentsByCourse = async (courseId) => {
  const students = await Student.find();

  return students.filter(item=>item.courseId===courseId);
};
export const getStudents = async () => {
  const students = await Student.find();

  return students
};

export const getStudent = async (studentId)=>{
    const student = await Student.findOne({id:studentId})

    return student
}