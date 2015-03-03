'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('MenuCtrl', ['$scope', 'Categories',  ($scope, Categories) => {
    $scope.categories = Categories.query();
  }]);
