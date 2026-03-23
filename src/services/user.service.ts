//import { updateUser } from './../controllers/user.controller';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// * Récupérer tous les utilisateurs + * GET *
export const getUserById = async(id: number) =>{
    return await prisma.user.findUnique({
        where : {id}
    });
};

// * Créer un nouvel utilisateur + * POST *
export const createUser = async(name: string, email: string)=>{
    return await prisma.user.create({
        data : {name,email}
    });
};

// * Modifier un utilisateur via id + * PUT/PATCH *
export const updateUser = async(id: number, name: string, email: string)=>{
    return await prisma.user.update({
        where : {id},
        data : {name, email}
    });
};

// * Supprimer un utilisateur via id + * DELETE *
export const deleteUser = async(id: number) =>{
    return await prisma.user.delete({
        where : {id}
    });
};