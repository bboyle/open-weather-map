angular.module( 'OWMApp', [ 'ngRoute' ] )

	.config(function( $routeProvider ) {
		$routeProvider
			.when( '/', {
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			})

			.when( '/cities/:city', {
				templateUrl: './city.html',
				controller: 'CityCtrl'
			})
		;
	})


	.controller( 'HomeCtrl', function( $scope ) {
		// empty for now
	})

	.controller( 'CityCtrl', function( $scope, $routeParams ) {
		$scope.city = $routeParams.city;
	})
;