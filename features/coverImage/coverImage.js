app.directive('coverImage', function() {
    return {
        restrict: 'E',
        templateUrl: 'features/coverImage/coverImage.html',
        controller: 'tripCtrl',
        link: function (scope, element, attributes) {
            console.log(element);
            scope.changeCover = function() {
                console.log('Ran cover change');
                element.find('name-div').css('background-image', 'url(' + scope.coverUrl +')');
                scope.coverUrl = '';
          }
        
        }
    }
})