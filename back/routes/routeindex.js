const { Router } = require("express");
const express = require("express");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express();

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let plainpassword = req.body.password;

  let user = await User.findOne({ email: email });

  if (!user) {
    res.json({ message: "User or Password is incorrect", code: "UPI", err: true });
  }
  else {
    let valid = await bcrypt.compareSync(plainpassword, user.password);

    if (valid) {

        const today = new Date()
        const expiresDate = new Date()

        expiresDate.setDate(today.getDate()+1)

        let token = jwt.sign({ id: user.email }, process.env.SECRET, {
          expiresIn: "1m",
        });
        console.log(token);
        res.json({token: token,expiresIn:expiresDate})
      } else {
        res.json({ message: "User or Password is incorrect", code: "UPI", err: true });
      }



  }
});

router.post("/addUser", async (req, res) => {
  let user = new User(req.body);

  let exists = await User.findOne({ email: user.email });

  console.log(exists);

  if (!exists) {
    user.password = bcrypt.hashSync(user.password, 10);
    await user.save();
    res.json({ message: "User created", code: "UC", err: false });
  } else {
    res.json({ message: "User already exists", code: "UAE", err: true });
  }
});

module.exports = router;
