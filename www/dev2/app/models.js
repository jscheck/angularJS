angular.module('gameApp')
    .factory('slotFactory', ['constants', function(constants){

        function Slot() {
            this.src = constants.IMAGE_SLOT;

            this.focus = function(toggleStatus) {
                this.src = (toggleStatus === 1) ? constants.IMAGE_RED : constants.IMAGE_YELLOW;
            };

            this.blur = function() {
                this.src = constants.IMAGE_SLOT;
            };
        }

        return {
            newSlot: function(){
                return new Slot();
            }
        }
    }]);
