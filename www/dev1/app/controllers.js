angular.module('demoApp', [])

    .service('testService', function(){

        this.text = 'Service says Hello';

        this.sayHello= function(){
            return this.text;
        };
    })

    .factory('testFactory', function(){
        // private functions and variables
        this.text = 'Factory says Hello';

        this.makeText = function(){
            return this.text
        };

        return {
            sayHello: function(text){
                return this.makeText;
            }
        }
    })

    .controller('testController', ['$scope', 'testService', 'testFactory', function storageController($scope, testService, testfactory) {
        $scope.writeText = function() {
            $localStorage.text = $scope.storage.text;
            $scope.storage.text = '';
        };
        $scope.readText = function() {
            alert($localStorage.text);
        };
    }]);


