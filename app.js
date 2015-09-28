'use strict';
let inventory = angular.module('inventory', []);

inventory.controller('inventoryCtrl', function($scope) {
	$scope.rooms = [];
	$scope.inventoryList= [];
	$scope.addRoom = room => {
		$scope.rooms.push(room);
		$scope.room = null;
	}
	$scope.addItem = item => {
		$scope.item.total = $scope.item.cost * $scope.item.quantity;
		$scope.inventoryList.push(item);
		console.log($scope.rooms)
		console.log($scope.item.cost);
		console.log($scope.item.quantity);
		for (let n of $scope.rooms) {
			if ($scope.item.room === n.name) {
				if(n.cost) {
				n.cost = n.cost + ($scope.item.cost * $scope.item.quantity)
				} else {
					n.cost = ($scope.item.cost * $scope.item.quantity)
				}
			}
			console.log(n)
		}
		$scope.item = null;
	}
})