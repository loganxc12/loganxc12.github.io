app.service('tripService', function(url, $firebaseArray) {
    
//    this.getUsers = function() {
//        var ref = new Firebase(url);
//        var tripsArray = $firebaseArray(ref);
//        return tripsArray;
//    }
    
    var myTrips = [
        {
            title: 'New Zealand', 
            id: 863486,
            description: "kktffjfk"
        }
    ];
    
    this.editTrip = function(id, text) {
        id = Number(id);
        for (var i = 0; i < myTrips.length; i++) {
            if (myTrips[i].id === id) {
                myTrips[i].description = text;
            }
        }
        console.log(myTrips);
    }
    
    
    this.addTrip = function(trip) {
        console.log(trip);
        myTrips.push(trip);
        console.log(myTrips);
    }
    
    this.findTrip = function(id) {
        id = Number(id);
        for (var i = 0; i < myTrips.length; i++) {
            console.log(myTrips[i].id + " | " + id);
            if (myTrips[i].id === id) {
                console.log('myTrips[i]');
                return myTrips[i];
            }
        }
    }
    
    this.getTrips = function() {
        return myTrips;
    }
    
})