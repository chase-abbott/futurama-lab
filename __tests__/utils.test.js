
import { getQuotes } from '../utils/futurama-api.js';


describe('demo routes', () => {
  it('returns a random quote from the matching character', async () => {
    await getQuotes('Bender');  
  });
});
