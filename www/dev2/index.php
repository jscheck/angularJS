<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Vier Gewinnt (Angular Version)</title>

    <link rel="stylesheet" type="text/css" href="css/style.css">

    <script src="lib/angular.js"></script>
    <script src="lib/ngStorage.min.js"></script>
    <script src="lib/jquery-1.11.2.js"></script>
    <script src="app/app.js"></script>
    <script src="app/constants.js"></script>
    <script src="app/models.js"></script>
    <script src="app/controllers.js"></script>

</head>

<body>

    <div class="center" ng-app="gameApp" ng-controller="gameBoard">
        <table>

            <tr>
                <td colspan="{{columns}}">
                    <img ng-src="{{token}}" />
                </td>
            </tr>

            <!-- First line with the shadow coins to indicate the slots -->
            <tr>
                <td ng-repeat="(colIndex, slot) in slots track by $index">
                    <img ng-src="{{slot.src}}"
                         ng-click="drop(colIndex); slot.blur()"
                         ng-mouseover="slot.focus(toggleStatus)"
                         ng-mouseout="slot.blur()" />
                </td>
            </tr>

            <!-- The board -->
            <tr ng-repeat="row in cells">
                <td ng-repeat="cell in row track by $index">
                    <img ng-src="{{cell}}" />
                </td>
            </tr>

        </table>
    </div>

</body>
</html>
