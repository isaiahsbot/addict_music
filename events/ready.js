module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
    
    let botStatus = [
        `.gg/addict`,
        `vibe`
     
    ]
    
        setInterval(function() {
        let status = botStatus[Math.floor(Math.random() * botStatus.length)];
        client.user.setActivity(status, {type: "LISTENING"});
    
        }, 5000)

    client.user.setActivity(client.config.discord.activity);
};