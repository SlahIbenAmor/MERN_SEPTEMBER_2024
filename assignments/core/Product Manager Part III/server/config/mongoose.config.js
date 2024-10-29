const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.q2e7e.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
.then(() => console.log(`Established connection to ${dbName} ✅`))
.catch(() => console.error(`Connection to ${dbName} failed ❌`));

