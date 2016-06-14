/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
		window.plugins.pushNotification.register(
		function(token){
            window.pushToken = token;
            // En una aplicación seria ahora lo deberíamos mandar al servidor
			alert("EL TOKEN ES "+window.pushToken);

$.post( "http://psh-notifications.mybluemix.net/sample_server.php",{deviceToken:window.pushToken})
        .done(function( data ) {
        //console.log(data);
        //var data = $.parseJSON(data);
        alert("token enviado");
        });








		},
		function(){
			alert('Error al registrarse en el servidor APNS');
		},{
			"badge":"true",
			"sound":"true",
			"alert":"true",
			"ecb":"onNotificationAPN"
		});
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};
function onNotificationAPN (event) {
    if (event.alert) {
       alert(event.alert);
    }

    if (event.sound) {
        var snd = new Media(event.sound);
        snd.play();
    }

    if (event.badge) {
        window.plugins.pushNotification.setApplicationIconBadgeNumber(function(){}, function(){}, event.badge);
    }
}