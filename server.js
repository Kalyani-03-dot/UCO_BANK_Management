const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'uco_bank',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Routes

// Register User
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(sql, [username, hashedPassword], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Error registering user' });
            } else {
                res.status(201).json({ message: 'User registered successfully' });
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Login User
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], async (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error logging in' });
        } else if (results.length === 0) {
            res.status(401).json({ error: 'Invalid credentials' });
        } else {
            const match = await bcrypt.compare(password, results[0].password);
            if (match) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        }
    });
});

// Add Transaction
app.post('/transactions', (req, res) => {
    const { username, amount, type } = req.body;

    const sql = 'INSERT INTO transactions (username, amount, type) VALUES (?, ?, ?)';
    db.query(sql, [username, amount, type], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error recording transaction' });
        } else {
            res.status(201).json({ message: 'Transaction recorded successfully' });
        }
    });
});

// Get Transactions
app.get('/transactions/:username', (req, res) => {
    const { username } = req.params;

    const sql = 'SELECT * FROM transactions WHERE username = ?';
    db.query(sql, [username], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching transactions' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

    const DB =  connectDB
});
