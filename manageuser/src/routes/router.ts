import express from 'express';
import { insert } from '../manageusers/controller.js';



const router=express.Router();

router.post("/",insert)

export default router