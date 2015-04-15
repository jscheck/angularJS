<!doctype html>
<html ng-app="demoApp">
<head>

    <title>Dev-0</title>
    <script type="text/javascript" src="lib/angular.min.js"></script>
    <script type="text/javascript" src="lib/ngStorage.min.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <script type="text/javascript" src="app/controllers.js"></script>


</head>
<body>

    <div>
        <label>Name:</label>
        <input type="text" ng-model="userName" placeholder="Enter Name">
        <h1>Your name is {{userName.toUpperCase()}}</h1>
    </div>

    <hr />

    <div id="alertControllerId" ng-controller="alertController">
        <button ng-click="showPop()">show pop</button>
    </div>

    <hr />

    <div ng-controller="textController">
        <button ng-click="showText()">show text</button><button ng-click="resetText()">reset text</button>
        <h1>{{text}}</h1>
    </div>

    <hr />

    <form name="form" ng-controller="storageController">
        <input type="text" name="input" ng-model="storage.text">
        <button ng-click="writeText()">write text</button><button ng-click="readText()">read text</button>
    </form>

<!--ng-repeat-->

</body>
</html>