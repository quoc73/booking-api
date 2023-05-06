import attraction from "../model/attraction.js";

export const createAttraction = async (req,res,next)=>{
    const newAttraction = new attraction(req.body)
    
    try{
        const savedAttraction = await newAttraction.save()
        res.status(200).json(savedAttraction)
    }catch (err){
        next(err);
    }
}

export const updateAttraction = async (req,res,next)=>{
    try{
        const updatedAttracion =await attraction.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
        const savedAttraction = await newAttraction.save()
        res.status(200).json(updatedAttracion)
    }catch (err){
        next(err);
    }
}

export const getAttraction = async (req,res,next)=>{
    try{
        const Attracion =await attraction.findById(req.params.id);
        res.status(200).json(Attracion)
    }catch (err){
        next(err);
    }
}

export const deleteAttraction = async (req,res,next)=>{
    try{
        await attraction.findByIdAndDelete(req.params.id);
        res.status(200).json("Attraction has been deleted");
    }catch (err){
        next(err);
    }
}

export const getallAttraction = async (req,res,next)=>{
    try{
        const Attracions =await attraction.find();
        res.status(200).json(Attracions)
    }catch (err){
        next(err);
    }
}
