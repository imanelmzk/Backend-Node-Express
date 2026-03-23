"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const getUsers = (req, res) => {
    const users = [
        { id: 1, name: "Imane" },
        { id: 2, name: "Yassine" },
    ];
    res.json(users);
};
exports.getUsers = getUsers;
