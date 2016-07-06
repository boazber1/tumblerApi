/**
 * Created by Boaz on 24/06/2016.
 */

var app = angular.module('myApp', []);//The creation of an Angular app named 'myApp'.
app.controller('myCtrl', function($scope, $http) { //controller named 'myCtrl' referring to 'myApp'.


    var photoPath1=[]; // This array will contain the photos that we are pulling from the  Tumbler API.
    var photoPath2=[]; //This array will connect to the $scope variable in order to inject our photos to the HTML file.

    $http({// Attempt to connect to our Tumbler Api using $http object
        method: 'JSONP',
        url: 'http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/photo?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true&callback=JSON_CALLBACK',
        params: {
            format: 'jsonp',
            json_callback: 'JSON_CALLBACK'
        }
    }).then(function (res) {// If the attempt to connect to the API were successfully handled , Go >>


        console.log(res);//Test log

        for (var i = 0, k=0 ; i < 12; i++, k++) {//Looping 12 times to retrieve the needed photos.

            photoPath1[i] = res.data.response.posts[i].photos[0];//Filling the first array with an array of photos
            photoPath2[k] = photoPath1[i].alt_sizes[3].url;//Filling the second array with images themselves,alt_sizes is the photo size, number 3 was the best option for our mission

        }

        $scope.photoPath2 = photoPath2; // The $scope variable photoPath2 is being connected to our local variable photoPath2

    }).catch(function (res) {// If there was any problem to connect to the Tumbler API, print some error message .

        console.log("Fail-status");
    });



});







