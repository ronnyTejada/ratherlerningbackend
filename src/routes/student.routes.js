const { Router } = require("express");
const { createStudent, getStudents,getStudent, getStudentsByCourse } = require("../controllers/students");
const router = Router();

router.post("/create-student", async (req, res) => {
  const { name, email, age, id, course } = req.body.student;
  console.log(req.body.student)
  if (req.body.student) {
    let response = await createStudent(req.body.student);
    if (response) {
        console.log(response,'response student')
      res.json({
        message: "student added",
        status: true,
        code: "200",
      });
    } else {
      res.json({
        message: "something went wrong",
        status: false,
      });
    }
  } else {
    res.send(401);
  }
});

router.get("/get-students-by-course", async (req, res) => {
  let data = await getStudentsByCourse(req.query.courseId);
  if (data) {
    res.json({
      message: "all students found",
      code: "200",
      data: data,
      status: true,
    });
  } else {
    res.json({
      message: "something went wrong",
      code: "404",
    });
  }
});


router.get("/get-students", async (req, res) => {
  let data = await getStudents();
  if (data) {
    res.json({
      message: "all students found",
      code: "200",
      data: data,
      status: true,
    });
  } else {
    res.json({
      message: "something went wrong",
      code: "404",
    });
  }
});

router.get("/get-student-by-id", async (req, res) => {
    let data = await getStudent(req.query.id);
    if (data) {
      res.json({
        message: "student was found",
        code: "200",
        data: data,
        status: true,
      });
    } else {
      res.json({
        message: "something went wrong",
        code: "404",
      });
    }
  });


export default router;
