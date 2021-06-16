import pool from '../lib/utils/pool.js';
import { getQuotes } from '../utils/futurama-api.js';

export default class Profile {
  id;
  name;
  favoriteCharacter;
  tagline;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.favoriteCharacter = row.favorite_character;
    this.tagline = row.tagline;
  }

  static async insertProfile ({ name, favoriteCharacter, tagline }){
    const { rows } = await pool.query(`
      INSERT INTO profiles (name, favorite_character, tagline) VALUES ($1, $2, $3) RETURNING *`
    , [name, favoriteCharacter, tagline]);
  
    return new Profile(rows[0]);
  }

  static async selectProfiles () {
    const { rows } = await pool.query(`
    SELECT * FROM profiles`);

    return rows.map(profile => new Profile(profile));
  }

  static async selectProfileById (id) {
    const { rows } = await pool.query(`
    SELECT * FROM profiles WHERE id = $1`
    , [id]);

    return new Profile(rows[0]);
  }

  static async updateProfile (id, { favoriteCharacter }){
    const newTagline = await getQuotes(favoriteCharacter);
    
    const { rows } = await pool.query(`
    UPDATE profiles
    SET favorite_character = $1, tagline = $2
    WHERE id = $3
    RETURNING *`
    , [favoriteCharacter, newTagline, id]);

    return new Profile(rows[0]);
  }
}
