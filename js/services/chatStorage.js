'use strict';

chat.factory('chatStorage', function () {
	var apiKey = "x8NWg6Nr753Jzb3aZOd3UdytPLx9svpc",
		USER_STORAGE_ID = 'userStorage-angularjs';

	function getUrl(room) {
		if (!room){
			room = "default";
		}
		return "https://api.mongolab.com/api/1/databases/chat/collections/" + room + "?apiKey=" + apiKey;
	};

	function getChatHistory(room) {
		var response = $.ajax({ 
			url: getUrl(room),
			type: "GET",
			async: false,
			contentType: "application/json",          		
		});
		return JSON.parse(response.responseText);
	};

	function putMessage(room, item) {
		$.ajax({ 
			url: getUrl(room),
			type: "POST",
			contentType: "application/json", 
			data: JSON.stringify(item)         		
		});
	};


	return {
		get: getChatHistory,
		put: putMessage,

		getUserName: function () {
			return localStorage.getItem(USER_STORAGE_ID) || '';
		},
		putUserName: function (name) {
			localStorage.setItem(USER_STORAGE_ID, name);
		}
	};
});