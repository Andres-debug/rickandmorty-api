import { Character } from "../models/character.model.js";

// GET All Characters

export const getAllCharacters = async (req,res)=>{

    const characters = await Character.findAll();
    res.status(200).json(characters)
}

//GET Character By Id

export const getCharacterById = async (req,res)=>{
    const character = await Character.findByPk(req.params.id)
    character ? res.status(200).json(character) : res.status(404).json({msg:'Not found'})
}
//POST Crear Character 
export const createCharacter = async (req,res)=>{
    const newChar = await Character.create(req.body);
    res.status(201).json(newChar)
}

// PUT update character

export const updateCharacter = async (req,res)=>{
    const character = await Character.findByPk(req.params.id);
    if(!character) return res.status(404).json({msg:'Not Found'})
    await character.update(req.body)
    res.status(200).json(character)

}

export const deleteCharacter = async (req,res)=>{
    const character = await Character.findByPk(req.params.id);
    if(!character) return res.status(404).json({msg:'Not Found'})
    await character.destroy()
    res.status(200).json({msg:'Deleted'})

}
