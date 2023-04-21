const token = require('./token');

function validateSessionAndHeader(sessions, req) {
    if (!(sessions.token == undefined || req.headers.authorization == undefined)) {
        if (sessions.token == req.headers.authorization.split(' ')[1]) {
            if (token.validateToken(sessions.token)) {
                return { code: 202, validation: true };
            }
            return { code: 408, validation: true };
        }
        return { code: 406, validation: true };
    }
    return { code: 401, validation: true };
}

module.exports = { validateSessionAndHeader };