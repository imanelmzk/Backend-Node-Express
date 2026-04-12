import { createUserSchema } from '../validators/user.schema';
//import { getUserById } from './user.controller';
// import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import /*getUserById + createUser + updateUser + deleteUser*/ * as userService from "../services/user.service";


// * Créer un nouvel utilsateur avec validation ZOD
export const createUserSchemaTeste = async(req: Request, res: Response) =>{
  try{
      //* 1. On valide les données reçues (req.body) avec ZOD 
      //* Si les données sont fausses, 
      //* Zod lance une erreur qui va directement dans le catch
      const validatedData = createUserSchema.parse(req.body); // ✅ corrige "createUserSchema.({name, email})" → "createUserSchema.parse(req.body)"

      //* 2. Si les données sont valides, on peut les utiliser pour créer l'utilisateur
      const {name, email} = validatedData; // ✅ corrige "const {name, email} = req.body;" → "const {name, email} = validation;"

      const newUser = await userService.createUser(name, email);
      res.status(201).json(newUser);
  }catch(error : any){
    //* 3. Si ZOD détecte une erreur, on renvoi un message précis
    if(error.name == "ZODErreur"){
      return res.status(400).json({
        error: "Données invalides",
        details: error.errors // Donne les détails.
      });
    }
      res.status(500).json({error : "Serveur échoué"})
  }
}


// * Récupérer tous les utilisateurs par ID+ * GET *
export const getUserById = async(req: Request, res: Response) => {
  try{
    const user = await userService.getUserById(Number(req.params.id));
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur" });
  };
};

// *  Créer un nouvel utilisateur + * POST *
export const createUser = async(req: Request, res:Response) =>{
  try{
    const validatedData = createUserSchema.parse(req.body);
    const {name, email} = validatedData;
    const newUser = await userService.createUser(name, email);
    res.status(201).json(newUser);
  }catch(error){
    console.error("détail du l'erreur:",error);
    res.status(500).json({error : "Erreur Interne"})
  };
};

// * Modifier un utilisateur via id + * PUT/PATCH *
export const updateUser = async(req: Request, res: Response) =>{
  try{
    const id = Number(req.params.id); 
    const {name, email} = req.body;
    const updatedUser = await userService.updateUser(id, name, email);
    res.json(updatedUser);
  }catch(error){
      res.status(404).json({error : "Utilisateur non trouvé"})
    };
};

 // * Supprimer un utilisateur via id + * DELETE *
 export const deleteUser = async (req:Request, res:Response) =>{
  try{
    const id = Number(req.params.id);
    // const {name, email} = req.body;
    const deletedUser = await userService.deleteUser(id);
    res.json(deletedUser);
  }catch(error){
    res.status(404).json({error : "Utilisateur non trouvé"})
  }

 }




// const prisma = new PrismaClient(); On supprime ceci, car on a remplacé tous par "srevice/user.service.ts"
/*
// * Récupérer tous les utilisateurs + * GET * 
export const getUserById = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findUnique({
      where: { id: Number(req.params.id) } // ✅ corrige "id" → "Number(req.params.id)"
    })
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
};

// *  Créer un nouvel utilisateur + * POST * 
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email } // ✅ corrige "datae" → "data"
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
  }
};

// * Modifier un utilisateur via id + * PUT/PATCH *
export const updateUser = async(req: Request, res : Response) => {
  const id = Number(req.params.id);
  const {name, email} = req.body;

  try{
    const updatedUser = await prisma.user.update({
      where : {id},
      data : {name, email}
    })
    res.json(updatedUser);
  }
  catch{
    //res.status(500).json({error : "Erreur lors de la modification de l'utilisateur"})
    res.json({message: "Erreur lors de la modification de l'utilisateur"})
  }
}

// * Supprimer un utilisateur via id + * DELETE *
export const deleteUser = async(req: Request, res: Response) =>{
  const id = Number(req.params.id);
  try{
    const deletedUser = await prisma.user.delete({
      where : {id}
    });
    res.json(deletedUser);
  }catch(error){
    res.json({message: "Erreur lors de la suppression de l'utilisateur"})
  }
}*/