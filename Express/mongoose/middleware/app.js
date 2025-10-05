
// Imports Mongoose library to interact with MongoDB.
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18 }
});

// Pre-save middleware
userSchema.pre('save', function(next) {
    console.log('Before saving:', this);
    // Example: automatically capitalize name
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    next(); // continue save
});

// Post-save middleware
userSchema.post('save', function(doc) {
    console.log('After saving:', doc);
});

// Create a model
const User = mongoose.model('User', userSchema);

// Create and save a user
async function createUser() {
    const user = new User({ name: 'rakesh', email: 'rakesh@example.com', age: 20 });
    await user.save(); // triggers pre and post middleware
}

createUser();
