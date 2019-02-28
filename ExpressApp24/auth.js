const auth = require('basic-auth');

const admins = {
    '': { password: 'Web- ja mobiilikäyttöliittymät' },
    'admin': { password: '4321' }

    /*'user': { password: '1234' },*/
};

module.exports = function (request, response, next) {
    var user = auth(request);
    if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
        response.set('WWW-Authenticate', 'Basic realm="Toimenpiteitä vaaditaan! Salasana on kurssin nimi, kayttajatunnusta ei tarvita. Tervetuloa!"');
        return response.status(401).send();
    }
    return next();
};