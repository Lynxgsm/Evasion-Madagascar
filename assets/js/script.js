(function() {
    var app = angular.module('app', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "assets/pages/home.html" })
            .when("/destination", { templateUrl: "assets/pages/destination.html" })
            .when("/ville", { templateUrl: "assets/pages/ville.html" })
            .when("/prestataire", { templateUrl: "assets/pages/prestataire.html" })
            .otherwise({ redirectTo: "/" })
    });

    app.controller('mainController', function($rootScope) {
        $rootScope.titre = "I- Page d'accueil";
    });

    app.controller('homeController', function($rootScope) {
        $rootScope.titre = "I- Page d'accueil";
    });

    app.controller('destinationController', function($rootScope) {
        $rootScope.titre = "II- Destination";
    });

    app.controller('villeController', function($rootScope) {

    });

})();