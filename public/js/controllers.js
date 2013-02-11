function NavigationController($scope, $element, NavigationService) {
    console.log($scope);
    var interface = {
        click : function(link) {
            NavigationService.meta.unload(link);
        },
        on : function(event, callback) {

        }
    }
    NavigationService.meta = interface;
}
