const jwt = require("jsonwebtoken");
const { use } = require("../routes/userRouter");

class Authentication {
  constructor(userId, username, password, firstName, LastName, role) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.LastName = LastName;
    this.role = role;
  }

  static getAll() {
    return localUserdb;
  }

  static validateUser(username, password) {
    const result = localUserdb.find(
      (user) => user.username == username && user.password == password
    );
    if (!result) throw new Error("Invalid username and password");
    else
      return {
        username: result.username,
        fullName: result.firstName + " " + result.LastName,
      };
  }
}

let localUserdb = [];
localUserdb = [
  new Authentication(1, "nahom", "nahom", "Nahom", "Asmelash", "SuperAdmin"),
  new Authentication(2, "apple", "apple", "Apple", "Martin", "Guest"),
];

module.exports = Authentication;
