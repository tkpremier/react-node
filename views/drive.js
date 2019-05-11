"use strict";

var fs = require('fs');

var readline = require('readline');

var _require = require('googleapis'),
    google = _require.google;

var credentials = require('./credentials'); // If modifying these scopes, delete token.json.


var SCOPES = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly']; // The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.

var TOKEN_PATH = 'token.json';
/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

function listFiles(auth) {
  var drive = google.drive({
    version: 'v3',
    auth: auth
  });
  drive.files.get({
    pageSize: 100
  }, function (err, res) {
    if (err) return console.log('The API returned an error: ' + err);
    var files = res.data.files;

    if (files.length) {
      console.log('Files:');
      files.map(function (file) {
        console.dir(file.metaData);
        console.log("".concat(file.name, " (").concat(file.id, ")")); // console.dir(file);
      });
    } else {
      console.log('No files found.');
    }
  });
}
/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */


function getAccessToken(oAuth2Client, callback) {
  var authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function (code) {
    rl.close();
    oAuth2Client.getToken(code, function (err, token) {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token); // Store the token to disk for later program executions

      fs.writeFile(TOKEN_PATH, JSON.stringify(token), function (err) {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */


function authorize(credentials, callback) {
  var _credentials$installe = credentials.installed,
      client_secret = _credentials$installe.client_secret,
      client_id = _credentials$installe.client_id,
      redirect_uris = _credentials$installe.redirect_uris;
  var oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]); // Check if we have previously stored a token.

  fs.readFile(TOKEN_PATH, function (err, token) {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
} // INITIAL FUNCTION
// Load client secrets from a local file.
// fs.readFile('./credentials.json', (err, content) => {
//   if (err) return console.log('Error loading client secret file:', err);
//   console.log('readfile content: ', content);
//   // Authorize a client with credentials, then call the Google Drive API.
//   authorize(JSON.parse(content), listFiles);
// });


authorize(credentials, listFiles);