function NavigationController($scope, $element, NavigationService) {
    $($element).find('.navigation').each(function(el) {
        alert(el.html());
    });
}
