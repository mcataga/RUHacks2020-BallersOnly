const router = require('express').Router();
let Listing = require('../models/listing.model');

router.route('/').get((req, res) => {
  Listing.find()
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const additional = req.body.additional;
  const players = req.body.players;
  const location = req.body.location;

  const newListing = new Listing({
    name,
    email,
    number,
    additional,
    players,
    location,
  });

  newListing.save()
  .then(() => res.json('Listing added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Listing.findById(req.params.id)
    .then(listing => res.json(listing))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Listing.findByIdAndDelete(req.params.id)
    .then(() => res.json('Listing deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Listing.findById(req.params.id)
    .then(listing => {
        listing.name = req.body.name;
        listing.email = req.body.email;
        listing.number = req.body.number;
        listing.additional = req.body.additional;
        listing.players = Number(req.body.players);
        listing.location = req.body.location;

      listing.save()
        .then(() => res.json('Listing updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;