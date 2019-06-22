// Database
const db = require('../db');

module.exports = (req, res) => {
	console.log('ytytytytytt');
	db.query(`SELECT * FROM products WHERE category = 1`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	});
};
