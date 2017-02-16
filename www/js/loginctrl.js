crtl.controller('loginctrl', function($scope, $state, $ionicPopup, $timeout,$ionicLoading, $rootScope) {
/**
 * this control for setting user roles
  
 */
$scope.login = function(logindata){

	if(logindata.email === "admin@gmail.com"&& logindata.password === "pass"){
	
	
    var adminkey = {"admin_email":"admin@gmail.com","password":"pass","user_role":"admin"};
    localStorage.setItem("UserToken",JSON.stringify(adminkey));
    $state.go("productsCatalog");
	}
	else{
	var userkey = {"user_email":"enduser@gmail.com","password":"pass","user_role":"enduser"};
    localStorage.setItem("UserToken",JSON.stringify(userkey));
    $state.go("productsCatalog");
	}
};


});