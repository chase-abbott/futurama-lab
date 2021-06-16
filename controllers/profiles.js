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
  })
  .get('/profile', async (req, res) => {
    try{
      const profiles = await Profile.selectProfiles();
      res.send(profiles);
    }
    catch(err){
      res.status(500).send(err);
    }
  })
  .get('/profile/:id', async (req, res) => {
    try{
      const profile = await Profile.selectProfileById(req.params.id);
      res.send(profile);
    }
    catch(err){
      res.status(500).send(err);
    }
  })
  .patch('/profile/:id', async (req, res) => {
    try{
      const profile = await Profile.updateProfile(req.params.id, req.body);
      res.send(profile);
    }
    catch(err){
      res.status(500).send(err);
    }
  })
  .delete('/profile/:id', async (req, res) => {
    try{
      const profile = await Profile.deleteProfile(req.params.id);
      res.send(profile);
    }
    catch(err){
      res.status(500).send(err);
    }
  });

