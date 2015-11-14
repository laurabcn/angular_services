(function(){
    'use strict';

    angular
        .module('customDirectives', [])
        .directive('triButton', triButton);

    function triButton(){
        var directive = {
            scope: {
                counter: '='
            },
            link : linkFunc
        };
        return directive;

        function linkFunc(scope, element, attrs){
            element.on("click", function(event){
                console.log("button"+event.target.innerText);
                scope.$apply(function(){
                    scope.counter++;
                });
            });
        }
    }
})();