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
        username,
        email
    } = body;

    if (!username){
        return res.send({
            success: false,
            message: 'Error: Username cannot be blank.'
        })
    }

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
    username = username.toLowerCase();

    User.find({
        $or: [ { email: email }, { username: username } ]
    }, (err,previousUsers) =>{
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server error.'
            })}
        if (previousUsers.length > 0){
            if (previousUsers[0].email == email){
                return res.send({
                    success: false,
                    message: 'Error: Account already exists with this email.'
                })
            } else if (previousUsers[0].username == username){
                return res.send({
                    success: false,
                    message: 'Error: Account already exists with this username.'
                })
        }}
        

        const newUser = new User();
        newUser.username = username;
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
            username
        } = body;

    if (!username){
        return res.send({
            success: false,
            message: 'Error: Username cannot be blank.'
        })
    }

    if (!password){
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        })
    }

    username = username.toLowerCase();

    User.find({
        username: username
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
                message: 'Error: No user exists with the username/password combination provided.'
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

router.route('/verify').get((req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error.'
            })
        }

        if (sessions.length != 1){
            return res.send({
                success: false,
                message: 'Error: Invalid.'
            })
        }
        
        else {
            return res.send({
                success: true,
                message: 'Verified.'
            })
        }

    })
});

router.route('/logout').get((req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set:{isDeleted:true}
    }, null, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error.'
            })
        }

        return res.send({
            success: true,
            message: 'Verified.'
        })
        

    })
});

module.exports = router;