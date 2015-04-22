angular.module('gameApp')
    .controller('gameBoard', ['$scope', 'constants', 'slotFactory', function($scope, constants, slotFactory) {

        $scope.columns = constants.COLUMNS;
        $scope.token = constants.IMAGE_RED;
        $scope.toggleStatus = 1

        $scope.cells = [];
        $scope.slots = [];

        // Init the slots
        for (var col = 0; col < constants.COLUMNS; col++) {
            $scope.slots[col] = slotFactory.newSlot();
        }

        // Init the board
        for (var row = 0; row < constants.ROWS; row++) {
            $scope.cells[row] = [];
            for (var col = 0; col < constants.COLUMNS; col++) {
                $scope.cells[row][col] = constants.IMAGE_BOARD_EMPTY;
            }
        }

        // Drop a coin into slot cole
        $scope.drop = function (col) {

            if ($scope.cells[0][col] != constants.IMAGE_BOARD_EMPTY) {
                alert('This slot is full.');
                return;
            }

            // Drop the coin, until the bottom or on top of another coin
            var row = 0;
            while (row < constants.ROWS-1 && this.cells[row+1][col] == constants.IMAGE_BOARD_EMPTY) {
                row++;
            }

            // Update board
            $scope.cells[row][col] = ($scope.toggleStatus === 1) ? constants.IMAGE_BOARD_RED : constants.IMAGE_BOARD_YELLOW;

            // Toggle token color
            $scope.toggleStatus *= -1;
            $scope.token = ($scope.toggleStatus === 1) ? constants.IMAGE_RED : constants.IMAGE_YELLOW;
        };
    }]);
