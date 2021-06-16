import pool from '../lib/utils/pool.js';

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
}
