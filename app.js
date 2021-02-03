const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(morgan('dev'));
app.use(cors());

app.post('/auth', (req, res) => {
    const token = jwt.sign(
        {
            login: req.query.login,
            id: req.query.id,
        },
        'JWT_DEV',
        {
            expiresIn: 60 * 60 * 24,
        }
    );

    res.status(200).json({
        token: `Bearer ${token}`,
    });
});

module.exports = app;
