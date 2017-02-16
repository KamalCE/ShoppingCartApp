

app = angular.module('starter', ['ionic','starter.controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
/**
 * navigation of pages in app
  
 */
app.config(function( $stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('login', {
    url: '/login',
    cache:false,
    views:{
      'viewContent':{
    templateUrl: 'templates/login.html',
    controller:'loginctrl'
  }
  }
  })

  .state('productsCatalog', {
    url: '/productsCatalog',
    cache:false,
    views:{
      'viewContent':{
    templateUrl: 'templates/productscatalog.html',
    controller:'productscatalogctrl'
  }
  }
  })

   .state('addproducts', {
    url: '/addproducts',
    cache:true,
    views:{
      'viewContent':{
    templateUrl: 'templates/addProducts.html',
    controller:'addproductctrl'
  }
  }
  })

   .state('showproduct', {
    url: '/showproduct/:pname',
    cache:true,
    params:{'name':null,'desc':null,'price':null},
    views:{
      'viewContent':{
    templateUrl: 'templates/showproduct.html',
    controller:'productscatalogctrl'
  }
  }
  })

  ;
  $urlRouterProvider.otherwise('/productsCatalog');
});


