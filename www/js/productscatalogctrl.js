crtl.controller('productscatalogctrl', function($scope, $state, $stateParams, $ionicPopup, $timeout,$ionicLoading, $rootScope) {

console.log("wdwd");
var Productkey = JSON.parse(localStorage.getItem("ProductToken"));
var Local_Img =[];
/**
 * this control load all products
  
 */

$scope.getAllProducts = function(){

	var userkey = JSON.parse(localStorage.getItem("UserToken"));
	if(userkey){
	if(userkey.user_role === "admin"){
		$scope.hideMe = false;
		$scope.showHideLogOut = false;
		$scope.showHideLogIn = true;

	}}
	else{
		$scope.hideMe = true;
		$scope.showHideLogOut = true;
		$scope.showHideLogIn = false;	
	}
	
	if(Productkey){
		
		// $scope.products = Productkey;
//loading product to landing page
		var d;
		var g1=[];
		var arraylen =Productkey.length; 
		for(var i=0;i<Productkey.length ; i++ )
		{
			Local_Img.push(Productkey[i]);
		}
		for(i=0;i<Productkey.length ; i=i+2 )
		{

			if(i === arraylen-1)
			{
				d = {'images':[Productkey[i]]};
				g1.push(d);
			}else
			{
				d = {'images':[Productkey[i],Productkey[i+1]]};
				g1.push(d);
			}


		}
		$ionicLoading.hide();
		// $scope.item = g1;
		$scope.products = g1;


	}
	else{
		if(userkey){
		if(userkey.user_role === "admin"){
		var alertPopup = $ionicPopup.alert({
                            title: 'No Products',
                            template: 'Please add Products.'
                        });
	}}
	else{
		var noProductPop = $ionicPopup.alert({
                            title: 'No Products',
                            template: 'No Products are available.'
                        });
	}
	}

	//$scope.products = productkeys;

};


/**
 * this control show the selected product description
  
 */
$scope.showProducts = function(){
	var userkey = JSON.parse(localStorage.getItem("UserToken"));
	if(userkey){
	if(userkey.user_role === "admin"){
		$scope.hideAll = true;
	}}
	else{
		$scope.hideAll = false;
	}

		$scope.product = {
			name:$stateParams.name,
			desc:$stateParams.desc,
			price:$stateParams.price
		};
};


$scope.goProduct = function(prductdetails)
{
	
	$state.go("showproduct",{"name":prductdetails.name,"desc":prductdetails.desc,"price":prductdetails.price});
};

/**
 * this control for logout admin
  
 */
$scope.logOut = function(){
	 window.localStorage.removeItem('UserToken');
	 $state.go($state.current, $stateParams, {reload: true, inherit: false});
	 //$state.go("login",{reload:true});
};
/**
 * this control for login admin
  
 */
$scope.logIn = function(){
	$state.go("login",{reload:true});
};
});