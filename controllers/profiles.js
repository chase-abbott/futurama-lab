import { Router } from 'express';
import Profile from '../models/Profile.js';

export const profileController = Router()
  .post('/profile', async (req, res) => {
    try{
      const profile = await Profile.insertProfile(req.body);
     
      res.send(profile);
    }
    catch(err){
      res.status(500).send(err);
    }
  });

