app.controller("OneProductController", ["$scope","$routeParams","$http",function($scope,$routeParams,$http){
    
    $scope.product = {};

    $scope.getProduct = function(){
        $http.get('/api/get-product/'+$routeParams.productId)
            .then(function(response){
                $scope.product = response.data;
            });
    };

    $scope.getProduct();

    $scope.comment = "";

    $scope.saveComment = function(){
        $http.post('/api/save-comment', {text: $scope.comment, product_id: $routeParams.productId})
            .then(function(response){
                $scope.comment = "";
            });
    };

    socket.on('new-comment-'+$routeParams.productId, function(data){
        $scope.product.comments.push(data);
        $scope.$apply();
    });
}]);