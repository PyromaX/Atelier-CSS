Template.header.helpers({
    //add you helpers here
});

Template.header.events({
    //add your events here
});

Template.header.onCreated(function () {
    //add your statement here
});

Template.mobileHeader.onRendered(function () {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
});

Template.header.onDestroyed(function () {
    //add your statement here
});

