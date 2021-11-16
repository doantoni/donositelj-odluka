const User = require('../models/user')

exports.getUsers = async (req,res,next) => {
    const allUsers = await User.find({})

    res.render("users", {allUsers})
}

exports.postUser = async (req, res, next) => {
    let newUser = new User({ firstName: req.body.firstName, lastName: req.body.lastName})
    await newUser.save()
    const allUsers = await User.find({})

    res.redirect("/users")
}

exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id)
    res.redirect("/users")
}

exports.editUser = async (req, res, next) => {
    const { id } = req.params;
    console.log(req.body)
    const user = await User.findByIdAndUpdate(id, {...req.body})
    console.log(user)
    await user.save()
    res.redirect('/users')
}