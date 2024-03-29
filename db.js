// require package
const {Client} = require('pg')

// create connection
const db = new Client({
	connectionString: 'postgres://orasaoneal:@localhost:5432/shop'
})

// connect to database
db.connect((err) => {
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}
})

module.exports = db
