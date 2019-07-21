const UserModel = require("./../database/models/user_model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

function login(req, res) {
    //code to go here
    res.json(req.body);
}

async function loginCreate(req, res) {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    console.log("login attempt", req.body);

    if (!user) {
        return res.status(400).json({ error: "Invalid username or password" });
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //     return res.status(400).json({ error: "Invalid username or password" });
    // }

    const token = jwt.sign(
        { user }, 
        process.env.JWT_SECRET, 
        { expiresIn: "10m" },
        (err, token) => {
            if (err) throw err;
            res.json({token});
        }
    );
    // res.json(req.body);  //testing

    // const { username, password } = req.body;
    // const user = await UserModel.findOne({ username });

    // if (!user) {
    //     return res.render("authentication/login", { error: "Invalid email & password" });
    // }

    // // const valid = await user.verifyPassword(password);

    // // if (!valid) {
    // //     return res.render("authentication/login", { error: "Invalid email & password" });
    // // }

    // req.session.user = user;
    // res.redirect("/dashboard");
}

module.exports = {
    loginCreate
}