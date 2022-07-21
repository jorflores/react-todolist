const { Router } = require("express");
const express = require("express");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Task = require("../model/task");
const verify = require("../middleware/verifyAccess");

const router = express();

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let plainpassword = req.body.password;
  console.log(`Login data: ${req.body.email}  ${req.body.password}`)

  let user = await User.findOne({ email: email });

  if (!user) {
    res.json({
      message: "User or Password is incorrect",
      code: "UPI",
      err: true,
    });
  } else {
    let valid = await bcrypt.compareSync(plainpassword, user.password);

    if (valid) {
      const today = new Date();
      const expiresDate = new Date();

      expiresDate.setDate(today.getDate() + 1);

      let token = jwt.sign({ id: user.email }, process.env.SECRET, {
        expiresIn: "1d",
      });
      console.log(token);
      res.json({ token: token, expiresIn: expiresDate });
    } else {
      res.json({
        message: "User or Password is incorrect",
        code: "UPI",
        err: true,
      });
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

router.post("/addTask", verify, async (req, res) => {
  let task = new Task(req.body);
  task.user_id = req.userId;

  await task.save();

  res.json(task);
});

router.get("/getTasks", verify, async (req, res) => {
  let task = await Task.find({ user_id: req.userId });
  console.log(task)
  res.json(task);
});

router.post("/deleteTask", verify, async (req, res) => {

  let task = await Task.findById(req.body.id)
  if (task){
    await task.delete()
    res.json({ msg: "Task deleted" })
  }
  else {
    res.json({ msg: "Could not delete task" })
  }


})

module.exports = router;
