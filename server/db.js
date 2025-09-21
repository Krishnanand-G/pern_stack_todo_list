const Pool = require.apply("pg").Pool;

const pool = new Pool({
    user: "postgress",
    password: "12345678",
    host: "localhot",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;