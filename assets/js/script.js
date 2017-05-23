(function() {
    var app = angular.module('app', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "assets/pages/home.html" })
            .when("/destination", { templateUrl: "assets/pages/destination.html", controller: "destinationController" })
            .when("/ville", { templateUrl: "assets/pages/ville.html", controller: "villeController" })
            .when("/prestataire", { templateUrl: "assets/pages/prestataire.html", controller: "prestataireController" })
            .when("/voyage", { templateUrl: "assets/pages/voyage.html", controller: "voyageController" })
            .when("/inscription", { templateUrl: "assets/pages/inscription.html", controller: "inscriptionController" })
            .when("/user", { templateUrl: "assets/pages/user.html", controller: "userController" })
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
        $rootScope.titre = "III- Sélection ville";
    });

    app.controller('prestataireController', function($rootScope) {
        $rootScope.titre = "IV- Préstataires";
    });

    app.controller('voyageController', function($rootScope) {
        $rootScope.titre = "V- Voyages";
    });

    app.controller('inscriptionController', function($rootScope) {
        $rootScope.titre = "VI- Inscription";
    });

    app.controller('userController', function($rootScope) {
        $rootScope.titre = "VII- Page Utilisateur";
    });

})();