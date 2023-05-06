import detailed from "../model/detailed.js";
import { createError } from "../ultis/error.js";


export const createdetailed = async (req,res,next)=>{
    const newdetailed   = new detailed(req.body)
    
    try{
        const saveddetailed = await newdetailed.save()
        res.status(200).json(saveddetailed )
    }catch (err){
        next(err);
    }
}

export const updatedetailed = async (req,res,next)=>{
    try{
        const updatededtailed =await detailed .findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
        const saveddetailed = await newdetailed.save()
        res.status(200).json(updatedetailed)
    }catch (err){
        next(err);
    }
}

export const getdetailed = async (req,res,next)=>{
    try{
        const Detailed =await detailed.findById(req.params.id);
        res.status(200).json(Detailed)
    }catch (err){
        next(err);
    }
}

export const deletedetailed = async (req,res,next)=>{
    try{
        await detailed .findByIdAndDelete(req.params.id);
        res.status(200).json("detailed has been deleted");
    }catch (err){
        next(err);
    }
}

export const getalldetailed = async (req,res,next)=>{
    try{
        const Detailed =await detailed.find();
        res.status(200).json(Detailed)
    }catch (err){
        next(err);
    }
}
