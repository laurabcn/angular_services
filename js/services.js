angular.module("customServices", [])
    .factory("logServices", logServices);

   // logServices.$inject = []



    function logServices(){
        var messageCount = 0;

        return {
            log: log
        };

        function log(msg){
            console.log("LOG + " + messageCount++ + msg);
        }

    }

