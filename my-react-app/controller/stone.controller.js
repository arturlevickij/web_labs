const db = require('../db');

class StoneController {
    async createStone(req, res) {
        const { title, text, price } = req.body;
        const newStone = await db.execute('INSERT INTO stones (title, text, price) VALUES (?, ?, ?)', [title, text, price]);

        res.json(newStone[0]);
    }

    async getStones(req, res) {
        const { minPrice, maxPrice, sortStone, searchStone } = req.query;
        let query = "SELECT * FROM stones";
        const params = [];

        if (minPrice || maxPrice || searchStone) {
            query += " WHERE ";

            if (minPrice) {
                query += "price >= ? ";
                params.push(parseFloat(minPrice));
            } else {
                query += "price >= 0 ";
            }

            query += " AND ";

            if (maxPrice) {
                query += "price <= ? ";
                params.push(parseFloat(maxPrice));
            } else {
                query += "price <= ? ";
                params.push(Number.MAX_SAFE_INTEGER);
            }

            query += " AND LOWER(title) LIKE LOWER(?) ";
            params.push(`%${searchStone}%`);
        }

        if (sortStone) {
            query += ` ORDER BY ${sortStone}`;
        }

        const sortedStones = await db.execute(query, params);
        res.json(sortedStones[0]);
    }

    async getDefaultStones(req, res) {
        const stones = await db.execute('SELECT * FROM stones');
        res.json(stones[0]);
    }

    async getOneStone(req, res) {
        const id = req.params.id;
        const oneStone = await db.execute('SELECT * FROM stones WHERE id = ?', [id]);
        res.json(oneStone[0][0]);
    }

    async updateStone(req, res) {
        const { title, text, price, id } = req.body;
        const stone = await db.execute('UPDATE stones SET title = ?, text = ?, price = ? WHERE id = ?',
            [title, text, price, id]);
        res.json(stone[0]);
    }
    

    async deleteStone(req, res) {
        const id = req.params.id;
        const stone = await db.execute('DELETE FROM stones WHERE id = ?', [id]);
        res.json(stone[0][0]);
    }
}

module.exports = new StoneController();
