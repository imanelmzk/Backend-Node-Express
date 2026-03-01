import express = require("express");
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
export default app;