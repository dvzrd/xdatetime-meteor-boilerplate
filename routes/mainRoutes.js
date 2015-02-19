Router.route('/', {
  name: 'home'
}, function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});
