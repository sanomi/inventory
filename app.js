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
		let roomIdx = $scope.rooms.indexOf({name:item.room});
		console.log(roomIdx);
		$scope.item = null;
	}
})