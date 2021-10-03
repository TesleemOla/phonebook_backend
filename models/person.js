const mongoose = require('mongoose');

const url = process.env.MONGODB_URI
mongoose.connect(url)
.then(result=>{
    console.log('Connected to MongoDB')
})
.catch(error=>{
    console.log("could not connect", error.message)
})

const contactSchema = new mongoose.Schema({
    name: String,
    number: String
})

contactSchema.set('toJSON', {
transform: (document, returnedObject)=>{
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
},
})



module.exports = mongoose.model('Contact', contactSchema)