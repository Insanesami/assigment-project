const db = require('../config/db');

exports.getPolicies = (req, res) => {
    const query = 'SELECT * FROM policies';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        res.json(results);
    });
};
