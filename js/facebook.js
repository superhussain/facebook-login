if (Meteor.isClient) {

  Template.login.events({
    'submit form': function(event){
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      console.log("Form submitted.");
      Meteor.loginWithPassword(emailVar, passwordVar);
    },
    'click .register-toggle': function(){
      $('.register').removeClass('inactive').addClass('active');
      $('.login').removeClass('active').addClass('inactive2');
    }
  });

  Template.register.events({
    'submit form': function(event){
      event.preventDefault();
      var emailVar = event.target.registerEmail.value;
      var passwordVar = event.target.registerPassword.value;
      var passwordVar2 = event.target.registerPassword2.value;
      console.log("Form submitted.");
      if (passwordVar == passwordVar2) {
        Accounts.createUser({
          email: emailVar,
          password: passwordVar
        });
      } else {
        console.log("Please make sure passwords are identical.");
      }
    },
    'click .login-toggle': function(){
      $('.login').removeClass('inactive2').addClass('active');
      $('.register').removeClass('active').addClass('inactive');
    }
  });

  Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });

  Template.dashboard.helpers({
    email: function() {
      return Meteor.user().emails[0].address
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
