app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
        .when("/", {
            templateUrl: "/views/home.html"
        })
        .when("/create-product", {
            templateUrl: "/views/create_product.html",
            controller: "ProductController"
        })
        .when("/products", {
            templateUrl: "/views/products.html",
            controller: "ProductController"
        })
        .when("/image", {
            templateUrl: "/views/image.html",
            controller: "ImageController"
        });

    $locationProvider.html5Mode(true);
}]);