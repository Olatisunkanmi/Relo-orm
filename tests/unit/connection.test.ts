import { Relo } from '../support';

describe('Connection Manager', () => {
    it('should handle connection of the instance of the Relo class', async () => {
       
       const relo = new Relo("mysql", "root", "@Olasunkanmi1", {
            "host": "localhost",
            "port": 3306,
            "database": "kulture",
            });
        
        
        const connection = await relo.connect();
        
        expect(connection).toBeDefined();
    });
});
