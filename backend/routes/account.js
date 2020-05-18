const router = require('express').Router();
let User = require('../models/user');
let UserSession = require('../models/userSession');

router.route('/').get((req, res) => {
  Listing.find()
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post((req, res, next) => {
    const { body } = req;
    const {
        firstName,
        lastName,
        password
    } = body;
    let {
        email
    } = body;

    if (!firstName){
        return res.send({
            success: false,
            message: 'Error: First name cannot be blank.'
        })
    }

    if (!lastName){
        return res.send({
            success: false,
            message: 'Error: Last name cannot be blank.'
        })
    }

    if (!email){
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        })
    }

    if (!password){
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        })
    }

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err,previousUsers) =>{
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server error.'
            })
        } else if (previousUsers.length > 0){
            return res.send({
                success: false,
                message: 'Error: Account already exists with this email.'
            })
        }

        const newUser = new User();
        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user)=>{
            if (err){
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            }
            return res.send({
                success: true,
                message: 'Signed up.'
            });
        });
    });

    });

router.route('/login').post((req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;

    if (!email){
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        })
    }

    if (!password){
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        })
    }

    email = email.toLowerCase();

    User.find({
        email: email
    },(err, users) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error.'
            })
        }

        if (users.length != 1){
            return res.send({
                success: false,
                message: 'Error: No user exists with the email/password combination provided.'
            })
        }

        const user = users[0];
        if (!user.validPassword(password)){
            return res.send({
                success: false,
                message: 'Error: Invalid Password.'
            })
        }

        UserSession = new UserSession();
        UserSession.userID = user._id;
        UserSession.save((err, doc) =>{
            if (err){
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            }

            return res.send({
                success: true,
                message: 'Valid login',
                token: doc._id
            })
        })

    });
});

module.exports = router;