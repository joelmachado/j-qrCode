// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
   // console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
      myApp.alert('Here comes About page');

})

myApp.onPageInit('about_me', function (page) {
    // Do something here for "about" page
    myApp.alert('Here comes About page');

})

$$('.qr-read').on('click', function () {
  //dynamicPopup.open();
 // myApp.alert("click");

 cordova.plugins.barcodeScanner.scan(
      function (result) {

       
     var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                      '<p><b>'+result.text+'</b></p>'+
                      '<p><a href="#" class="close-popup">Fechar</a></p>'+
                    '</div>'+
                  '</div>';

          /*myApp.alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);*/
                 myApp.popup(popupHTML);
      },
      function (error) {
          myApp.alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Aponte a camêra para o código", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );

   

   

});

myApp.onPageInit('read_code', function (page) {
    // Do something here for "about" page

     

    //myApp.alert('ler qr code');

})



// Option 2. Using one 'pageInit' event handler for all pages:
/*$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }

})*/

// Option 2. Using live 'pageInit' event handlers for each page
/*$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})*/