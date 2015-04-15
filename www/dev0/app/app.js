angular.module('demoApp', ['ngStorage']);

var demo = {};

demo.name = 'AngularJS Demo';
demo.getName = function(){
    return demo.name;
};

demo.app = (function() {

    responseTitle = 'Response';

    return {
        init: function() {
            demo.alertController = angular.element(document.getElementById('alertControllerId')).scope();
            demo.alertController.showReady();
        },
        getResponseTitle: function(){
            return responseTitle;
        }
    };

})();

angular.element(document).ready(function () {
    demo.app.init();
});