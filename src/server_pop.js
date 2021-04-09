module.exports = async function (client, count) {

    async function updateCount () {
         if(!count) {
             client.user.setActivity(`0/ 150`, { type: 'WATCHING' });
         }
         if(count >=0 ){
            client.user.setActivity(`${count} / 150`, { type: 'WATCHING' });
        }
        
    }
    
    return await updateCount();
}
