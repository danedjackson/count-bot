module.exports = async function (client, count) {

    async function updateCount () {
         client.user.setActivity(`${count} / 150`, { type: 'WATCHING' });
    }
    
    return await updateCount();
}
