  
(function () {
    'use strict';
    
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchCheck = function () {
        if ($scope.lunch === undefined) {
            $scope.lunchReturn = "Please enter data first"
        } else {
            let lunchArray = $scope.lunch.split(",");
            if (lunchArray.length <= 3) {
                $scope.lunchReturn = "Enjoy!"
            } else {
                $scope.lunchReturn = "Too much!"
            }
        }
    }
}

})();
