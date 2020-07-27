  
(function () {
    'use strict';
    
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchCheck = function () {
        let lunchArray = $scope.lunch.split(",");
        if (lunchArray.length <= 3) {
            $scope.lunchReturn = "Enjoy!"
        } else {
            $scope.lunchReturn = "Too much!"
        }
    }
}

})();
