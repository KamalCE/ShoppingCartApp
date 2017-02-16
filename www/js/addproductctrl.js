crtl.controller('addproductctrl', function($scope, $state, $stateParams, $ionicPopup, $timeout,$ionicLoading, $rootScope) {
	
	var productKey = JSON.parse(localStorage.getItem("ProductToken"));
	if(productKey){
	$scope.allProducts = productKey;
	
	}
	else{
			
	$scope.allProducts = [];
	}

	$scope.productdetials = [{
		name: '',
		desc: '',
		price: '',
		quantity: '',
		category: ''
	}];
	$scope.addProduct = function(productdetials){

			

		$ionicLoading.show({
			template:"loading.."
		});
		var index = $scope.productdetials.indexOf(productdetials);
		$scope.productdetials.splice(index,0);
		$scope.allProducts.push(angular.copy(productdetials));
		
		
		localStorage.setItem("ProductToken",JSON.stringify($scope.allProducts));
		
		$ionicLoading.hide();
		var alertPopup = $ionicPopup.alert({
                            title: 'Add Product',
                            template: 'Product added successfully.'
                        });
		
	};



});