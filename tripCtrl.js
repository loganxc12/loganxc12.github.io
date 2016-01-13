app.controller('tripCtrl', function($scope, tripService, $stateParams) {
    
    $scope.text = tripService.findTrip($stateParams.tripId);
    
    $scope.tripsArray = tripService.getTrips();
    
    $scope.addDescription = function() {
        tripService.editTrip($stateParams.tripId, $scope.tripDescription);
    }
    
    $scope.visible = false;
    $scope.toggleDescription = function() {
        console.log('toggle Description')
        $scope.visible = !$scope.visible;
    }
    
    $scope.coverButton = false;
    $scope.toggleCoverButton = function() {
        $scope.coverButton = !$scope.coverButton;
    }
    
    $scope.playButton = false;
    $scope.togglePlayButton = function() {
        $scope.playButton = !$scope.playButton;
    }
    
    $scope.coverForm = false;
    $scope.toggleCoverForm = function() {
        $scope.coverForm = !$scope.coverForm;
    }
    
    $scope.camera = true;
    $scope.toggleCamera = function() {
        $scope.camera = !$scope.camera;
    }
    
    $scope.descriptionEditor = false;
    
    $scope.toggleEditor = function() {
        console.log('toggle Editor')
        $scope.descriptionEditor = !$scope.descriptionEditor;
        console.log($scope.descriptionEditor);
    }
    
    $scope.pics = tripService.getPics();
    
    $scope.addPic = function() {
        tripService.addPic($scope.picUrl);
        $scope.picUrl = '';
    }
    
    $(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
//		tLoading: 'Loading image #%curr%...',
//		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
});
    
//  	$('.slideshow-button').magnificPopup({
////		delegate: 'a',
//		type: 'image',
//        items: picsGallery,
//
//		gallery: {
//			enabled: true,
//			navigateByImgClick: true,
//			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
//		},
//		image: {
//			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
//		}
//	});
    
})









