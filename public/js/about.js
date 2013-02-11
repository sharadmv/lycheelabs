var squares = [
    {
        text : "nelson z.",
        link : "http://nzhang.org",
        image : "nelson_thumb.png",
        order : 1
    },
    {
        text : "vikram i.",
        link : "http://iyervikram.org",
        image : "vikram_thumb.png",
        order : 2
    },
    {
        text : "vedant k.",
        link : "http://net.vedantk.com",
        image : "vedant_thumb.png",
        order : 3
    },
    {
        text : "sharad v.",
        link : "http://inst.eecs.berkeley.edu/~cs61a-tj",
        image : "sharad_thumb.png",
        order : 4
    },
    {
        text : "siddhartho b.",
        link : "http://www.github.com/ohtrahddis",
        image : "sid_thumb.png",
        order : 5
    },
    {
        text : "thanh hai m.",
        link : "http://thanhhaimai.com",
        image : "hai_thumb.png",
        order : 6
    },
    {
        text : "steve y.",
        link : "http://www.github.com/grizlo42",
        image : "steve_thumb.png",
        order : 7
    },
]
function AboutController($scope) {
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
    NavigationService.meta.unload = $scope.unload;
}
