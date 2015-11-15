angular.module("customServices", [])
    .provider("logServices", logServices);

   // logServices.$inject = []



    function logServices(){
        var messageCount = 0;
        var counter = true;
        var debug = true;


        return {
            messageCountEnabled : messageCountEnabled,
            debugEnabled : debugEnabled,
            $get : getLogger,
            log: log
        };

        function log(msg){
            if(debug){
                console.log("LOG " + (counter ?  " + " +this.messageCount++ +" )" : ") ") + msg);
            }
        }

        function messageCountEnabled(setting){
            if(angular.isDefined(setting))
            {
                counter = setting;
                return this;
            }
            else
            {
               return counter;
            }
        }

        function debugEnabled(setting){
            if(angular.isDefined(setting)){
                debug = setting;
                return this;
            }
            else
            {
                return debug;
            }
        }

        function getLogger(){
            return {
                messageCount : 0,
                log : log
            }
        }

    }

