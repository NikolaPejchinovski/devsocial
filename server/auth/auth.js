const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, 'RANDOM-TOKEN', (err, decodedToken) => {
            if(err) {
                res.status(401).json({msg: 'Invalid token'});
            } else {
                req.user = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({msg: 'No token found'});
    }
}

module.exports = auth;