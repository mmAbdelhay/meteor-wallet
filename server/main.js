import { Meteor } from "meteor/meteor";
import "../imports/api/ContactsCollection";
import "../imports/api/ContactsMethods";
import "../imports/api/ContactsPublications";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername("abdelhay")) {
    Accounts.createUser({
      username: "abdelhay",
      password: "123456",
    });
  }
});
