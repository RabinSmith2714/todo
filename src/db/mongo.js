const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "EHB7U4gXVuCDTJXo"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://rabinsmith:<4m3z9adnbw5d7Y9C>@todo.ytjw4op.mongodb.net/?retryWrites=true&w=majority&appName=todo`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'rabinsmith',
        pass: '4m3z9adnbw5d7Y9C'
    });
}

main().then(() => {
    console.log('MongoDB connected successfully');
}).catch(console.log);