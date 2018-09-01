"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");

admin.initializeApp();

const APP_NAME = "new new";

const gmailEmail = functions.config().newnew.email;
const gmailPassword = functions.config().newnew.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.notifyNewNewShare = functions.database
  .ref("/shares/{pushID}")
  .onCreate((snapshot, context) => {
    const share = snapshot.val();

    return sendNewNewShare(share).then(removeShare());
  });

function sendNewNewShare(share) {
  console.log(share);

  const { handle, artist, notable } = share;

  const mailOptions = {
    from: gmailEmail,
    to: gmailEmail
  };

  mailOptions.subject = `${APP_NAME} share from ${handle}`;
  mailOptions.html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
  <html>

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>new new share by @${handle}</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  </head>

  <body>
    <div class="container">
      <div>
        <h2>new new Share</h2>
      </div>
      <br>
      <div>
        <h5><strong>Artist: </strong>${artist}</h5>
        <p><strong>Notable: </strong>${notable}</p>
        <p><strong>Submitted by: </strong>${handle}</p>
      </div>
    </div>
  </body>

  </html>
  `;

  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log(`${APP_NAME} new new share by ${handle} sent`);
  });
}


function removeShare() {
  var shareRef = admin.database().ref('shares');

  shareRef.remove().then(() => {
    return console.log("Share removed successfully");
  }).catch((error) => {
    return console.log("Share remove failed: " + error.message);
  });
}
