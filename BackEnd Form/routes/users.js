const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const UserSchema = require('../schemas/User')

router.post(
  "/register",
  [
    check("email", "Correo Requerido").isEmail(),
    check("password", "Contraseña requerida").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await UserSchema.findOne({ email })
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
      }

      res.send("FUNCIONA");
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;