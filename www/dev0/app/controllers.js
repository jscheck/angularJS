angular.module('demoApp')

    .controller('textController', ['$scope','$http', function textController($scope,$http) {
        $scope.showText = function() {
            $http.get("ajax/response.php?task=getText").success(function(data){
                $scope.text = demo.app.getResponseTitle() + ': ' + data;
            });
        };
        $scope.resetText = function() {
            $scope.text = '';
        };
    }])

    .controller('alertController', ['$scope', function alertController($scope) {
        $scope.showReady = function() {
            alert(demo.getName() + ' is READY');
        };
        $scope.showPop = function() {
            alert('POP');
        };
    }]);
