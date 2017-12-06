app.controller("ProductController", ["$scope","$http",function($scope,$http){
    
    $scope.product = {};

    $scope.saveProduct = function(){

        $http.post("/api/save-product", $scope.product)
            .then(function(response){
                if(response.data.status == 'ok'){
                    alert('product created');
                    $scope.product = {};
                }
                else{
                    alert('some error');
                }
            });

    };

    $scope.products = [];
    $scope.getList = function(){
        $http.get("/api/products")
            .then(
                function(response){
                    $scope.products = response.data;
                },
                function(response){
                    alert(response.data);
                }
            );
    };

    socket.on("new-product", function(data){
        $scope.products.push(data);
        
        $scope.$apply(); // Refresh to scope tou angular
    });
}]);