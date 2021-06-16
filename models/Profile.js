import pool from '../lib/utils/pool;';

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

  static async insertProfile ({}){

      const { rows } = await pool.query(`
      INSERT INTO profiles (name)`)
    
  
}