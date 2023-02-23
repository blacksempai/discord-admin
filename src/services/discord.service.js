const axios = require('axios');
const BOT_TOKEN = process.env.BOT_TOKEN;

module.exports = {
    async getUser(token) {
        const {data} = await axios.get('https://discord.com/api/oauth2/@me',{
            headers: {'Authorization': 'Bearer '+token}
        });
        return data.user;
    },
    async getUserGuildsAll(token) {
        const {data} = await axios.get('https://discord.com/api/users/@me/guilds',{
            headers: {'Authorization': 'Bearer '+token}
        });
        return data;
    },
    async getUserGuildsAdministered(token) {
        console.log(this)
        const data = await this.getUserGuildsAll(token);
        return data.filter(s => (s.permissions & (1 << 3)) === (1 << 3));
    },
    async getBotGuilds() {
        const {data} = await axios.get('https://discord.com/api/users/@me/guilds',{
            headers: {'Authorization': 'Bot '+BOT_TOKEN}
        });
        return data;
    },
    async getUserGuildsAvailable(token) {
        const userGuilds = await this.getUserGuildsAdministered(token);
        const botGuilds = await this.getBotGuilds();
        return userGuilds.map(guild =>  
            botGuilds.find(g => g.id === guild.id) ?
            {...guild, isBot: true} :
            {...guild, isBot: false}
        );
    }
}
