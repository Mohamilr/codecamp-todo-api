// import dotenv from 'dotenv';
import pg from 'pg';

// dotenv.config();


// const connectToData = "postgres://wfhmuqso:F7Poag...@dumbo.db.elephantsql.com:5432/wfhmuqso";
const connectToData = {
    user: "wfhmuqso",
    host: "dumbo.db.elephantsql.com",
    port: 5432,
    password: "F7PoagMr8GjC1SjR_nTufALUsfY7vdnc",
    database: "wfhmuqso"
}

// const connectToData = {
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     port: 5432,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// }
console.log(connectToData)

const pool = new pg.Pool(connectToData);

pool.on('connect', () => {});


const createTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS 
    todos(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        created_at DATE NOT NULL,
        completed BOOLEAN NOT NULL
    )`;
    try {
        await pool.query(queryText);
        console.log('table created');
    } catch (error) {
        console.log(error)
    }
}

createTable();

export default  pool;

