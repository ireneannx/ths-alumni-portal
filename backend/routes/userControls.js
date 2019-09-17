const usersCtrl = {};

const User = require('../models/userProfile');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

usersCtrl.createUser = async (req, res) => {
    const { bio, current_company, employment_status, github, twitter, linkedIn } = req.body;
    const newUser = new User({
        bio,
        current_company,
        employment_status,
        github,
        twitter,
        linkedIn,
        avatarURL
    });
    await newUser.save();
    res.json('New user added');
};

usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

// usersCtrl.deleteUser = async (req, res) => {
//     await User.findByIdAndDelete(req.params.id)
//     res.json('user record Deleted');
// }

usersCtrl.updateUser = async (req, res) => {
    const { bio, current_company, employment_status, github, twitter, linkedIn } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        bio,
        current_company,
        employment_status,
        avatarURL: req.body.avatarURL || "https://cdn.elawoman.com/profilepic/female_dummy.jpg",
        github,
        twitter,
        linkedIn

    });
    res.json('User details Updated');
}

module.exports = usersCtrl;