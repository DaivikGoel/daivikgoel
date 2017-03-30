$( "hamburger-inner" ).hide();
$( ".menu" ).hide();
$( "hamburger-box" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( "hamburger-box" ).hide();
$( "hamburger-inner" ).show();
});
});

$( "hamburger-inner" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( "hamburger-inner" ).hide();
$( "hamburger-box" ).show();
});
});
