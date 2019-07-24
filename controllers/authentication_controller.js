const UserModel = require("./../database/models/user_model");
const jwt = require("jsonwebtoken");

async function login(req, res) {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.status(400).json({ error: "Invalid username or password" });
    }

    const valid = await user.verifyPassword(password);

    if (!valid) {
        return res.status(400).json({ error: "Invalid email & password" });
    }

    const token = jwt.sign(
        { user }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1d" },
        (err, token) => {
            if (err) throw err;
            res.json({token});
        }
    );
}

module.exports = {
    login
}