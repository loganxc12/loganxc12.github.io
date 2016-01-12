app.directive('coverImage', function() {
    return {
        restrict: 'E',
        templateUrl: 'features/coverImage/coverImage.html',
        controller: 'tripCtrl',
        link: function (scope, element, attributes) {
            element.find('#play').hover(function() {
                console.log('hover ran');
                var picsArray = scope.pics;
                for (var i = 0; i < picsArray.length; i++) {
                    delete picsArray[i].$$hashKey;
                }
                console.log(picsArray);
                $('.slideshow-button').magnificPopup({
                    type: 'image',
                    items: picsArray,

                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] 
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    }
                });
                    console.log(scope.pics);
            })
            scope.changeCover = function() {
                console.log('Ran cover change');
                element.find('name-div').css('background-image', 'url(' + scope.coverUrl +')');
                scope.coverUrl = '';
          }
        
        }
    }
})