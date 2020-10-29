const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
module.exports = client =>{
    client.on('guildMemberRemove',member =>{
        console.log('test');
    })
}