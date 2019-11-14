// ======================
// Navbar Active Link Changer

$('.navbar-nav > li').on('click', function(e) {
    $('.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
});

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

// ===========================
// SignUp Form Container Toggle

function openSignUp(){
    var modal = document.getElementById('form-wrap');
    modal.style.display='block';
}

// =======================
// Sign Up Form Validation
$(document).ready(function() {
	$("#userRegis").click(function(event){
        event.preventDefault();
        alert("Hello World");
        var form_data = $("#userRegis").serializeArray();
        var error_free = true;
        for (var input in form_data){
            var element = $("#userReg_"+form_data[input]['name']);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
            else{error_element.removeClass("error_show").addClass("error");}
        }
        if (!error_free){
            event.preventDefault(); 
        }
        else{
            alert('No errors: Form will be submitted');
        }
    });
});

// ===========================
// Suggestions Form Validation

function suggestions(){
    var text = document.getElementById('suggestionText').value;
    var check = document.getElementById('suggestionCheck').checked;
    var warning = document.getElementById('suggestionAlert');

    if(check == true && text.length>5){
        warning.className = "alert alert-success";
        warning.innerHTML = "Suggestion Recorded!!";
    }
    else{
        warning.className = "alert alert-warning";
        if(check == false){
            warning.innerHTML = "Please Check to Submit";
        }
        else{
            warning.innerHTML = "Must be at least 5 Characters!!";
        }
    }
    warning.style.display = 'block';
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
bloodApp.config(function($routeProvider,$locationProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'Pages/home.html'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'Pages/about.html'
    })

    // route for the banks page
    .when('/banks', {
        templateUrl : 'Pages/banks.html'
    })

    // route for the why Blood page
    .when('/whyblood', {
        templateUrl : 'Pages/why blood.html'
    })

    // route for the events page
    .when('/donation', {
        templateUrl : 'Pages/donationProgram.html'
    });
});