import dotenv from 'dotenv';
dotenv.config();
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import { getQuotes } from '../utils/futurama-api.js';

describe('demo routes', () => {
  
  beforeEach(() => {
    return setup(pool);
  });

  it('posts a new profile into the profiles table', async () => {
    const profile = {
      name: 'Chase',
      favoriteCharacter: 'Bender',
      tagline: await getQuotes('Bender')
    };
    const res = await request(app).post('/profile').send(profile);
   
    expect(res.body).toEqual({ id: '1',
      name: 'Chase',
      favoriteCharacter: 'Bender',
      tagline: expect.any(String)
    });
  });

  it('gets all profiles from the database', async () => {
    const profile = {
      name: 'Chase',
      favoriteCharacter: 'Bender',
      tagline: await getQuotes('Bender')
    };

    const { body } = await request(app).post('/profile').send(profile);

    const getRes = await request(app).get('/profile');

    expect(getRes.body).toEqual([body]);
  });
});
