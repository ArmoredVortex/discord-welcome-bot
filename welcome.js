const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
module.exports = client =>{
    client.on('guildMemberAdd',member=>{
        console.log('test');
    })
}