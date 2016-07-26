angular.module('firebase.config', [])
  .constant('FBURL', 'https://contentcalendar-7bd80.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
