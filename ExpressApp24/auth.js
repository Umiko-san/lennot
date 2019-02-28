const auth = require('basic-auth');

const admins = {
    '': { password: 'LTD7008' },
    '': { password: 'LTD 7008' },
    '': { password: 'ltd7008' },
    '': { password: 'ltd 7008' },
    '': { password: '3621425' },
    'admin': { password: '4321' }

    /*'user': { password: '1234' },*/
};

module.exports = function (request, response, next) {
    var user = auth(request);
    if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
        response.set('WWW-Authenticate', 'Basic realm="Toimenpiteita vaaditaan! Salasana on kurssin tunnus (UEFin tai Karelian kay), kayttajatunnusta ei tarvita. Tervetuloa"');
        return response.status(401).send();
    }
    return next();
};