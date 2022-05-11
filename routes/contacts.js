const express = require('express');
const port = process.env.PORT || 3000;
const router = express.Router();

const {
  gettingInfoContacts,
  gettingSingleContact,
  deletingSingleContact,
  creatingNewContact,
  updatingContact
} = require('../controller/contacts');

router.get('/', gettingInfoContacts);

router.get('/:id', gettingSingleContact);

router.delete('/:id', deletingSingleContact);

router.post('/', creatingNewContact);

router.put('/:id', updatingContact);

// router.use(
//   '/',
//   (docData = (req, res) => {
//     let docData = {
//       documentationURL: `https://300/contacts`
//     };
//     res.send('lol');
//   })
// );

module.exports = router;
