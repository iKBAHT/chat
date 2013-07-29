'use strict';

chat.controller('chatCtrl', function chatCtrl($scope, $location, chatStorage) {
	var userName = $scope.userName = chatStorage.getUserName();
	if (userName === ''){
		changeUserName();		
	}
	
	if ($location.path() === '') {
		$location.path('/');
	}

	$scope.location = $location;

	$scope.$watch('location.path()', function () {
		$scope.messages = [];
	});

	setInterval(getMessages, 1000);

	$scope.changeUserName = function () {
		changeUserName();
	}

	$scope.sendMessage = function () {
		var messageText = $scope.messageText.trim();
		if (!messageText.length) {
			return;
		}

		sendMessage({
			author: $scope.userName,
			messageText: messageText 
		});
		
		$scope.messageText = "";
	}

	function changeUserName() {
		var userName = $scope.userName = prompt("You nick name:");
		chatStorage.putUserName(userName);
	}	

	function getMessages() {
		$scope.$apply(function () {
            $scope.messages = chatStorage.get(getRoomName());
        });		
	}

	function sendMessage(message){
		$scope.messages.push(message);
		chatStorage.put(getRoomName(), message);
	}

	function getRoomName() {
		return $location.path().substr(1);
	}
});

