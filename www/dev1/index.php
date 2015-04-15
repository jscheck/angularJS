<!doctype html>
<html ng-app="demoApp">
<head>

    <title>Dev-1</title>
    <script type="text/javascript" src="lib/angular.min.js"></script>
    <script type="text/javascript" src="app/models.js"></script>
    <script type="text/javascript" src="app/controllers.js"></script>


</head>
<body>

    <div ng-controller="testController">
        <button ng-click="callService()">call Service</button><button ng-click="callFactory()">call Factory</button>
        <h1>{{text}}</h1>
    </div>

</body>
</html>