const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:8081', 
    ],

    optionsSuccessStatus: 200, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    headers: 'Content-Type,Authorization',
    credentials: true,
}
app.use(express.json());
app.use(cors(corsOptions));

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exocrudnodereact'
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM employee";
    database.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO employee (`firstname`, `name`, `email`, `position`) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.name,
        req.body.email,
        req.body.position
    ]
    database.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log ('Server is running on port 8081 at http://localhost:8081')
})