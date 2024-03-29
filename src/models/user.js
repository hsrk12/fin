import Group from "src/models/group.js";

class User {
  constructor(userId, username, email, groups = []) {
    this.userId = userId;
    this.userName = username;
    this.email = email;
    this.getGroups = groups;
  }

  getUserId() {
    return this.userId;
  }

  getUserName() {
    return this.userName;
  }

  getuserEmail() {
    return this.email;
  }

  setUserName(newUserName) {
    this.getUserName = newUserName;
  }

  setUserName(name) {
    this.setUserName = name;
  }

  setEmail(newEmail) {
    this.getuserEmail = newEmail;
  }

  getUserInfo() {
    return {
      userId: this.userId,
      username: this.userName,
      email: this.email,
    };
  }

  getGroups() {
    return this.groups;
  }

  addGroup(group) {
    if (group instanceof Group) {
      this.groups.push(group);
    }
  }
}

export default User;
