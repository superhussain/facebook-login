if (Meteor.isClient) {
//  // counter starts at 0
//  Session.setDefault('counter', 0);
//
//  Template.hello.helpers({
//    counter: function () {
//      return Session.get('counter');
//    }
//  });
//
//  Template.hello.events({
//    'click button': function () {
//      // increment the counter when button is clicked
//      Session.set('counter', Session.get('counter') + 1);
//    }
//  });
  Template.login.events({
    'submit form': function(event){
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      console.log("Form submitted.");
    }
  });

  Template.register.events({
    'submit form': function(event){
      event.preventDefault();
      var emailVar = event.target.registerEmail.value;
      var passwordVar = event.target.registerPassword.value;
      console.log("Form submitted.");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
