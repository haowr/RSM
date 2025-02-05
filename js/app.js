

(function () {


    var app = angular.module('store', [ 'chart.js','appRoutes']);



    app.config(function ($httpProvider) {

    });

    app.controller('mainCtrl', ['$http', '$scope', '$timeout',  '$interval', '$window', function ($http, $scope, $timeout, $interval, $window) {

        $scope.chapelOpen = true;
        $scope.soundOpen = false;
        $scope.shopOpen = false;
        $scope.lightsPageOpen = false;
        $scope.contactPageOpen = false;
        $scope.zoomPageOpen = false;
        $scope.volumeOn = false;
        $scope.zoomPageOpen = false;

        $scope.audio = new Audio('../audio/ui_tap-variant-01.wav')


        $scope.contactPageOpen  = false;
        $scope.soundPageOpen    =   false;
        $scope.lightPageOpen    = false;
        $scope.homePageOpen     = true;

        $scope.openContactPage     = function(){

                if(!$scope.contactPageOpen){

                    $scope.contactPageOpen  = true;
                    $scope.homePageOpen = false;
                    $scope.soundOpen        = false;
                    $scope.soundPageOpen = false;
                    $scope.lightsPageOpen    = false;

                }

        }



    }]);


}());


