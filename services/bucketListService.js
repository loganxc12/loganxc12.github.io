app.service('bucketListService', function() {
    
    var bucketList = [
        {
            title: 'Hike Mt. Kilamanjaro',
            complete: false
        }
    ];
    
    this.getList = function() {
        return bucketList;
    }
    
    this.addNewItem = function(item) {
        bucketList.push(item);
    }
    
})