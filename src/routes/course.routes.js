import { ObjectId } from "mongodb";

const { Router } = require("express");
const { createCourse, getAllCourse,getCourseById, courseDetele,courseUpdate } = require("../controllers/course");

const router = Router();

router.post("/create-course", async (req, res) => {
  const { title, category, description, id } = req.body.course;
  if ((title, category, description, id)) {
    let response = await createCourse(title, category, description, id);
    if (response) {
      res.json({
        message: "course created",
        status: true,
        code: "200",
      });
    } else {
      res.json({
        message: "something went wrong",
        status: false,
      });
    }
    console.log(response);
  } else {
    res.send(401);
  }
});

router.get("/get-courses", async (req, res) => {
  let courses = await getAllCourse();
  if(true){
    if (courses) {
        res.json({
          message: "all courses found",
          code: "200",
          data: courses,
          status:true
        });
      } else {
        res.json({
          message: "something went wrong",
          code: '404',
        });
      }
  }else{
    res.send(401)
  }
});

router.get('/get-course-by-id',async(req,res)=>{
    if(req.query.id){
        let course = await getCourseById(req.query.id)
        if(course){
            res.json({
                message: "course found",
                code: "200",
                data: course,
              });
        }else{
            res.json({
                message: "course not found",
                code: "404",
                
              });
        }
    }else{
        res.send(401)
    }
})

router.post('/delete-course',async(req,res)=>{
  
  if(req.body.id){
    let response = await courseDetele(ObjectId(req.body.id))
    if(response){
      res.json({
        message:'course delete',
        code:'200',
        status:true
      })
    }else{
      res.json({
        message: "course not found",
        code: "404",
        
      });
    }
  }else{
    res.send(401)
  }
})

router.post('/update-course',async(req,res)=>{
  const { title, category, description, _id } = req.body.course;
  if(title, category, description, _id){
    let response = await courseUpdate(title, category, description,ObjectId(_id))
    if(response){
      res.json({
        message:'course update',
        code:'200',
        status:true,
        data:response
      })
    }else{
      res.json({
        message: "course not found",
        code: "404",
        
      });
    }
  }else{
    res.send(401)
  }

})

export default router;
