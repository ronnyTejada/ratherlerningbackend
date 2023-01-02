import { Router } from "express";
import { loginAdmin } from "../controllers/auth";

const router = Router();

router.post('/login',async(req, res)=>{
   
    const {email,password}=req.body
    loginAdmin(email,password)
    if(req.body.email && req.body.password){
        let response = await loginAdmin(email,password)
        if(response){
            res.json({
                message:'correct auth',
                username:response.username,
                status:true
            })
        }else{
            res.json({message:'username or password invalid'})
        }
    }else{
        res.send(401)
    }
})

export default router