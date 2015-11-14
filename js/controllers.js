(function(){
    'use strict';

    angular
        .module('exampleApp')
        .controller("defaultController", defaultController);

    defaultController.$inject = ['$scope', 'logServices'];


    function defaultController($scope, logServices){
        var vm = this;

        vm.data = {
            cities: ["London", "New York", "Paris"],
            totalClicks: 0
        };

        $scope.$watch('vm.data.totalClicks', function(newVal){
            //console.log("Total click count" + newVal);
            logServices.log("Total click count" + newVal)
        });

    }

})();

