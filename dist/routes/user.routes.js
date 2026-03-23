"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express.Router();
/*  Route définie */
exports.default = router.get("/", user_controller_1.getUsers);
