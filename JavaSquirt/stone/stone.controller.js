const db = require('../db');

class StoneController {
    async createStone(req, res) {
        try {
            const { name, carat, color, clarity, pricePerCarat } = req.body;
    
            if (!name || !carat || !color || !clarity || !pricePerCarat) {
                return res.status(400).json({ error: 'All fields are required.' });
            }
    
            const [rows, fields] = await db.execute('INSERT INTO stones (name, carat, color, clarity, pricePerCarat) VALUES (?, ?, ?, ?, ?)', [name, carat, color, clarity, pricePerCarat]);
            res.json(rows);
        } catch (error) {
            console.error("Error creating stone:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    async getStones(req, res) {
        const [rows, fields] = await db.execute('SELECT * FROM stones');
        res.json(rows);
    }

    async updateStone(req, res) {
        const { name, carat, color, clarity, pricePerCarat, id } = req.body;
        const [rows, fields] = await db.execute('UPDATE stones SET name = ?, carat = ?, color = ?, clarity = ?, pricePerCarat = ? WHERE id = ?', [name, carat, color, clarity, pricePerCarat, id]);
        res.json(rows[0]);
    }

    async deleteStone(req, res) {
        const id = req.params.id;
        const [rows, fields] = await db.execute('DELETE FROM stones WHERE id = ?', [id]);
        res.json(rows[0]);
    }
}

module.exports = new StoneController();
