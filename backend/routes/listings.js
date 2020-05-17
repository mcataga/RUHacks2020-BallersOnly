const router = require('express').Router();
let Listing = require('../models/listing.model');

router.route('/').get((req, res) => {
  Listing.find()
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const additional = req.body.additional;
  const players = req.body.players;
  const location = req.body.location;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  const newListing = new Listing({
    title,
    name,
    email,
    number,
    additional,
    players,
    location,
    latitude,
    longitude
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
        listing.title = req.body.title;
        listing.name = req.body.name;
        listing.email = req.body.email;
        listing.number = req.body.number;
        listing.additional = req.body.additional;
        listing.players = Number(req.body.players);
        listing.location = req.body.location;
        listing.latitude = req.body.latitude;
        listing.longitude = req.body.longitude

      listing.save()
        .then(() => res.json('Listing updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;