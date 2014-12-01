/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

"use script";

angular.module('AddressBook', [])
    .controller('AddressController', function($scope) {
        $scope.employees = pawneeEmployees;
        $scope.sortCol = 'lastName';
        $scope.searchString = "";

        $scope.sortReverse = false;

        $scope.sortBy = function(colName) {
            if($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse;
            }
            else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName;
        }

    });