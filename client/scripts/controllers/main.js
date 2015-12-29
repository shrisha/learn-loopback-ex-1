'use strict';

/**
 * @ngdoc function
 * @name whiskeyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whiskeyApp
 */
angular.module('whiskeyApp')
  .controller('MainCtrl', function ($scope, Whiskey) {
    // TODO populate `$scope.whiskeys` with a list of all whiskeys
    $scope.whiskeys = Whiskey.find();
  });
