// =======================
// Read More Functionality

function readMore(x) {
    var dots = document.getElementById("dotsText"+x);
    var moreText = document.getElementById("moreText"+x);
    var btnText = document.getElementById("expandBtn"+x);
  
    if (dots.style.display == "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

// =======================
// Sign Up Form Validation

$(document).ready(function() {
    $(".signupBtn").click(function() {
        var email = $("input[name='email']").val();
        var password = $("input[name='passw']").val();
        var bloodgrp = $("input[name='bloodGrp']").val();
        var msg = "";
        if (email == '' || password == '' || bloodgrp == '') {
            msg = "Please fill all fields!";
        }
        else if ((password.length) < 8) {
            msg = "Password should at least 8 character in length!";
        }
        else {
            msg = 'You have Successfully Registered...';
            $("#userRegistration").reset();
        }
        $('#suggestionAlert').addClass('show').removeClass('close').text(msg);
    });
});

// ===========================
// SignUp Form Container Toggle
function openModal(){
    var modal = document.getElementById('signUp_form');
    modal.style.display='block';
}

// ===========================
// Suggestions Form Validation
function suggestions(){
    var text = document.getElementById('suggestionText');
    var check = document.getElementById('suggestionCheck').checked;
    var warning = document.getElementById('suggestionAlert');
    if(check == true && text!=''){
        warning.className = "alert alert-success";
        warning.innerHTML = "Suggestion Recorded!!";
        warning.style.display = 'block';
        
    }
    else{
        warning.className = "alert alert-warning";
        warning.innerHTML = "Incorrect Format!!";
        warning.style.display = 'block';
    }
    setTimeout(function(){
        warning.style.display = 'none';
    },2000);
    document.getElementById('suggestionForm').reset();
}

// ===========================
// Angular JS Code Starts Here

// create the module and name it blooApp
// also include ngRoute for all our routing needs
var bloodApp = angular.module('bloodApp', ['ngRoute']);

// configure our routes
bloodApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'Pages/home.html'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'Pages/about.html'
    })

    // route for the contact page
    .when('/banks', {
        templateUrl : 'Pages/banks.html'
    })

    // route for the contact page
    .when('/whyBlood', {
        templateUrl : 'Pages/why blood.html'
    })
    .when('/events', {
        templateUrl : 'Pages/donationProgram.html'
    });
});
