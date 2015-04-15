angular.module('demoApp', [])

    .service('testService', function(){
        var text = 'Service says Hello';

        this.sayHello= function(){
            return text;
        };
    })

    .factory('testFactory', function(){
        var text = 'Factory says Hello';

        // private function
        var makeText = function(){
            return text;
        };

        return {
            sayHello: function(){
                return makeText();
            }
        }
    });