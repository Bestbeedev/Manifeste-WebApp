const Video=require('../Models/VideoPostModels')
const mongoose=require('mongoose')

//Recuperation de toutes les videos
const GetAllVideo=async (req,res)=>{
    const videosAll=await Video.find({}).sort({createAt:-1})
    res.status(200).json(videosAll)
    res.json({message:'Toutes les videos ici'})
}


//Recuperation d'une seule video
const GetOneVideo=async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Pas de video du genre"})
    }
    const singleVideo=await Video.findById(id)
    if(!singleVideo){
        return res.status(404).json({error:"Pas de video du genre"})
    } 
    res.status(200).json(singleVideo)
    res.json({message:'Un seule video ici'})
    
}


//Poster une videos

const PostVideo=async(req,res)=>{
    const {title,thumbnail,video,category}=req.body

    try{
        const videoCreating= await Video.create({title,thumbnail,video,category})
        res.status(200).json(videoCreating)
    }catch(error){
        res.status(400).json({error:error.message})
    } 
    res.json({message:'Une videos est poster ici'})
}


//Supprimer une video



//Modifier une video



module.exports={
    GetAllVideo,
    GetOneVideo,
    PostVideo
}