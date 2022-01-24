import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Header } from "./Header";
import { LoginForm } from "./pages/LoginForm";

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <div>
      <Header user={user} />
      <div className="min-h-full">
        <div className="max-w-4xl mx-auto p-2">
          {user ? (
            <div>
              <ContactForm />
              <ContactList />
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
};
