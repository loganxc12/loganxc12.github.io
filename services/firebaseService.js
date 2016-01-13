app.service('firebaseService', function($firebaseArray) {
    
    var url = 'https://travel-timeline.firebaseio.com/';
    var userRef = new Firebase(url + 'user');
    
    this.addUser = function(newUserData) {
        var users = $firebaseArray(userRef);
        users.$add(newUserData);
    }
    
    this.getUsers = function() {
        return $firebaseArray(userRef);
    }
    
    this.deleteUser = function(id) {
        var deleteUserRef = new Firebase(url + 'user/' + id);
        deleteUserRef.$remove();
    }
    
    this.getFirebaseTrips = function() {
        
    }
    
})