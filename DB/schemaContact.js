const mongoose = require('mongoose');
const schema = mongoose.Schema;

let contactSchema = new schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String
  },
  {
    collection: 'contacts',
    versionKey: false
  }
);

let contact = mongoose.model('contact', contactSchema);

module.exports = contact;
