angular.module('demoApp')

    .controller('testController', ['$scope', 'testService', 'testFactory', function testController($scope, testService, testfactory) {
        $scope.callService = function() {
            $scope.text = testService.sayHello();
        };
        $scope.callFactory = function() {
            $scope.text = testfactory.sayHello();
        };
    }]);

