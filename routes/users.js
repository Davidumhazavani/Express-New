import express from 'express';
import db from '../DB/conn.js';

const userRoutes = express.Router();

userRoutes.get("/users", async (req, res)=> {
    let collection = await db.collection("SMB");
    let result = await collection.find({}).limit(20).toArray()
    res.send(result)
    })

export default userRoutes;
