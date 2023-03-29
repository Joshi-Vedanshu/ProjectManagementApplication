const roles = {
    "default":0,
    "superAdmin": 1,
    "admin": 2,
    "manager": 3,
    "developer": 4,
    "tester": 5
}
Object.freeze(roles);

module.exports = { roles }