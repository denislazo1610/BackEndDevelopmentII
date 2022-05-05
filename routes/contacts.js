const express = require('express');
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

module.exports = router;
