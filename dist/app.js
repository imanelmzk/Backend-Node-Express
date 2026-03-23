"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
/*import type { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send(" Hello Express + TypeScript 🚀 ");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})*/
const app = express();
app.use(express.json());
app.use("/users", user_routes_1.default);
exports.default = app;
