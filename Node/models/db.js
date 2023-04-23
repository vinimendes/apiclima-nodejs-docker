const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:passwdtechstorm@postgres:5432/techstorm');

sequelize.authenticate()
.then(function(){
    console.log("Conexao realizada com sucesso!")
}).catch(function(){
    console.log("erro")
    sequelize.authenticate()
    .then(function(){
        console.log("Conexao realizada com sucesso!")
    }).catch(function(){
        console.log("erro")
    })
})

module.exports = sequelize;