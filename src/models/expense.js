import User from "src/models/user.js";
import Group from "src/models/group.js";

class expense {
  constructor(expId, expName, expAmount, group, payees = [], splitType) {
    this.expId = expId;
    this.expName = expName;
    this.expAmount = expAmount;
    this.payees = payees;
    this.splitType = splitType;

    if (group instanceof Group) {
      this.group = group;
    }
  }

  //splitType logic

  setExpenseName(name) {
    this.setExpenseName = name;
  }

  setExpAmount(amount) {
    this.expAmount = amount;
  }

  addPayees(user) {
    if (user instanceof User) {
      this.payees.push(user);
    }
  }
}

export default expense;
