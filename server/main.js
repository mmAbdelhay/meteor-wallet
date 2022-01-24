import { Meteor } from "meteor/meteor";
import "../imports/api/ContactsCollection";
import "../imports/api/ContactsMethods";
import "../imports/api/ContactsPublications";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(process.env.ADMIN_USERNAME)) {
    Accounts.createUser({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    });
  }
});
