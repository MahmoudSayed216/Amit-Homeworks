const app = require('./app');
const db = require('./db/database');
const PORT = 3000;


app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})

process.on('SIGINT', async () => {
    await db.close();
    process.exit(0);
});