(function(){
    'use strict';

    angular
        .module('customDirectives', ['customServices'])
        .directive('triButton', triButton);

    triButton.$inject = ['logServices'];

    function triButton(){
        var directive = {
            scope: {
                counter: '='
            },
            link : linkFunc,
            controller: triButtonController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        function linkFunc(scope, element, attrs){

            element.on("click", function(event){
                scope.vm.logServices.log("Button click: " +event.target.innerText);

                scope.$apply(function(){
                    scope.vm.counter++;
                });
            });
        }
    }

    triButtonController.$inject = ['$scope', 'logServices'];

    function triButtonController($scope, logServices){
        var vm = this;

        vm.logServices = logServices;

    }
})();