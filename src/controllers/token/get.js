const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const get = () => async (req, res, next) => {
    try {dd
        const username = req.body.username;
        if (!username) {
            throw new createError(405, "Username is required");
        }
        else if (username != "admin") {
            throw new createError(401, "Unauthorized User");
        }
        const token = generateAccessToken({ username });
        res.json(token);
    } catch (error) {
        next(error);
    }
}

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '8h' });
}

module.exports = get;