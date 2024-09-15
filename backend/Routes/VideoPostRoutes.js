const express=require('express')
const { PostVideo, GetAllVideo, GetOneVideo } = require('../Controllers/VideoControllers')
const router=express.Router()

//Recuperation de toutes les videos
router.get('/',GetAllVideo)
    
//Recuperation d'une seule video
router.get('/:id',GetOneVideo)

//Poster une videos
router.post('/',PostVideo)

//Supprimer une video
router.delete('/:id',(req,res)=>{
    res.json({message:'Une videos est supprimer ici'})
})

//Modifier une video
router.patch('/:id',(req,res)=>{
    res.json({message:'Une videos est modifier ici'})
})

module.exports=router