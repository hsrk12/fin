import User from "src/models/user.js";

class Group {
  constructor(groupID, groupName, groupMembers = [], expenses = []) {
    this.groupID = groupID;
    this.groupName = groupName;
    this.groupMembers = groupMembers;
    this.expenses = expenses;
  }

  getGroupName() {
    return this.groupName;
  }

  getGroupMembers() {
    return this.groupMembers;
  }

  getExpenses() {
    return this.expenses;
  }

  setGroupName(groupName) {
    this.groupName = groupName;
  }

  addGroupMembers(user) {
    if (user instanceof User) {
      this.groupMembers.push(user);
    }
  }
  //removeGroupMembers: what is the logic? what happens to all their expenses from the group?
}

export default Group;
