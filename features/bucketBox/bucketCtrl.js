app.controller('bucketCtrl', function($scope, bucketListService) {
    
    $scope.visible = false;
    
    $scope.toggle = function() {
        $scope.visible = !$scope.visible;
    }
    
    $scope.bucketList = bucketListService.getList();
    
    $scope.addItem = function() {
        bucketListService.addNewItem({title: $scope.newBucketItem, complete: false});
        $scope.newBucketItem = '';
    }
    
    
    $scope.clearForm = function() {
        $scope.newBucketItem = '';
    }
    
})