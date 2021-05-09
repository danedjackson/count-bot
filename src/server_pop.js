module.exports = async function (client, count) {
    const guildID = process.env.GUILDID;

    async function updateCount () {
        if(count){
            client.user.setActivity(`${count}`, { type: 'WATCHING' });
        }
    }

    const guild = client.guilds.cache.get(guildID);
    return await updateCount();
}
