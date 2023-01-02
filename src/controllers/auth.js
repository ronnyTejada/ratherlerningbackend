require('../connection');

const Admin = require('../models/Admin');

export const createAdmin=async()=>{
    const admin = new Admin({
        username:'admin',
        password:'admin'
    })

    await admin.save()
}

export const loginAdmin=async(username,password)=>{
    console.log(username,password)
    const admin = await Admin.findOne({username:username,password:password})
    return admin
}   
