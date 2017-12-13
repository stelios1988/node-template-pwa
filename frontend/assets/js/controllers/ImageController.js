app.controller("ImageController", ["$scope","Upload",function($scope,Upload){
    
    $scope.img = "";

    $scope.sendImage = function(){
        Upload.upload({
            url: '/api/save-image',
            data: {
                image: $scope.my_image
            }
        })
        .then(
            function (resp) {
                console.log(resp.data);
                $scope.img = resp.data.filename;
            }
        );
    };
}]);