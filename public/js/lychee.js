(function() {
    var BUCKET = "https://s3.amazonaws.com/lycheelabs/";
    var lychee = angular.module('lycheelabs', []).
        directive('square', function() {
        var time = 120;
        var count = 0;
        return {
            restrict : "E",
            link : function(scope, element, attrs, model) {
                var parent = scope.$parent;
                var unloaded = false;
                scope.animate = function(delay) {
                    setTimeout(function() {
                        element.css({
                            "background-image" : "url("+BUCKET+scope.image+")",
                        }).animate({
                            "opacity" : 0.75
                        }, time*3);
                    }, delay*time)
                }
                scope.load = function() {
                    element.find('.squaretext').text(scope.text);
                }
                scope.click = function() {
                    parent.unload(scope.link);
                }
                scope.mouseover = function() {
                    if (!unloaded) {
                        element.animate({
                            "opacity" : 1
                        },time);
                    }
                }
                scope.mouseout = function() {
                    if (!unloaded) {
                        element.animate({
                            "opacity" : 0.75
                        },time);
                    }
                }
                scope.unload = function(delay, callback) {
                    setTimeout(function() {
                        unloaded = true;
                        element.animate({
                            "opacity" : 0
                        }, time*3, function() {
                            parent.meta.count++;
                            if (parent.meta.count == parent.meta.length) {
                                callback();
                            }
                        })
                    }, delay*time)
                }
                scope.$watch(["ngModel"], function() {
                    parent.meta.scope[scope.order] = scope;
                    scope.animate(scope.order)
                    scope.load();
                })
            },
            scope : {
                text : "@text",
                link : "@link",
                order: "@order",
                image : "@image",
            },
            replace : true,
            require : 'ngModel',
            templateUrl : "/partial/square",
        }
    })
       .directive('navigation', function() {
        return {
            restrict : "E",
            link : function(scope, element, attrs, model) {
                scope.text = attrs.text;
                scope.id = attrs.id;
                scope.link = attrs.link;
                scope.class = 'navigation';
                scope.click = function() {
                    scope.nav.meta.click(scope.link);
                }
            },
            controller : function($scope, NavigationService) {
                $scope.nav = NavigationService
            },
            scope : {},
            replace : true,
            template : "<a>{{text}}</a>"
        }
    });
    lychee.factory('NavigationService', function() {
        return {
            controller : NavigationController
        }
    });
})();
