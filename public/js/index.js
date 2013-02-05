var squares = [
    {
        text : "about us",
        link : "about",
        image : "aboutus_thumb.png",
        order : 1
    },
    {
        text : "contact",
        link : "contact",
        image : "contactus_thumb.png",
        order : 2
    },
    {
        text : "store",
        link : "store",
        image : "lycheestore_thumb.png",
        order : 3
    },
    {
        text : "your cart",
        link : "cart",
        image : "shoppingcart_thumb.png",
        order : 4
    }
]

function IndexController($scope) {
    $scope.squares = squares;
}
function GridController($scope, NavigationService) {
    $scope.meta = {
        scope : {}
    };
    $scope.meta.count = 0;
    $scope.meta.length = squares.length;
    $scope.unload = function(link) {
        for (var i in $scope.meta.scope) {
            $scope.meta.scope[i].unload(i, function() {
                window.location = "/"+link;
            });
        }
    }
    NavigationService.unload = $scope.unload;
}
