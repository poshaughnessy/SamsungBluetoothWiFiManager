/**
 * Created by nherriot on 12/06/18.
 */

var piWifi = require('pi-wifi');
const config = require('config');
const wifiPassword = process.env.WIFIPASSWORD2 || 'unknown';

var networkDetails = {
  ssid: 'srguest',
  password: wifiPassword,
  key_mgmt: 'WPA-PSK',
};


/**
 * A simple test case that can be used to test connecting to network
 * described in networkDetails.
 * 
 * @run		/> export WIFIPASSWORD2='your password'
 * 			/> nodejs wifi-switch-network2.js
 * 
 * 
 */ 
piWifi.connectTo (networkDetails, function(err) {
  if(err) {
    console.log('Connection error: ' + err.message);

  } else {
    console.log('success');
  }
});

