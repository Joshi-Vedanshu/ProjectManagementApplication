const roles = {
    "SuperAdmin": 0,
    "Admin": 1,
    "Manager": 2,
    "Developer": 3,
    "Tester": 4
}
Object.freeze(roles);

module.exports = { roles }