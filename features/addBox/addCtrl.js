app.controller('addCtrl', function($scope, $state, tripService) {
    $scope.visible = false;
    $scope.toggle = function() {
        $scope.visible = !$scope.visible;
    }
    
    $scope.go = function() {
        var num = Math.round(Math.random() * 10000);
        tripService.addTrip({title: $scope.newTrip, id: num});
        $state.go('trip', {tripId: num});
    }
})