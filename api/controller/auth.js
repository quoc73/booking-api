import User from "../model/User.js";
import bcrypt from "bcryptjs"
export const register = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash, //password neu muon ma hoa thi co the len mang kiem tra thu vien bcryptjs 
        })

        await newUser.save()
        res.status(200).send("user has been created")
    }catch(err){
        next(err)
    }
};

export const login = async(req,res,next)=>{
    try{
        const user =await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,"user not found"))
        
        const ispasswordcorrect = await bcrypt.compare(req.body.password,user.password)
        if(!ispasswordcorrect) return next(createError(404,"password is incorrect"))

        
        res.status(200).json(user);
    }catch(err){
        next(err)
    }
}