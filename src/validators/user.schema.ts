import {z} from "zod";

export const createUserSchema = z.object({
    name : z.string().min(1, "Le nom est requis"),
    email : z.string().email("Email invalide")
});