function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    if (sidebar.style.width === "0px") {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
    } else {
        sidebar.style.width = "0px";
        content.style.marginLeft = "0px";
    }
  }
window.onload = function() {
  var submenus = document.getElementsByClassName('submenu');
  for (var i = 0; i < submenus.length; i++) {
      submenus[i].addEventListener('click', function() {
          var sublist = this.getElementsByClassName('sublist')[0];
          if (sublist.style.display === "none") {
              sublist.style.display = "block";
          } else {
              sublist.style.display = "none";
          }
      });
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      content.style.marginLeft = "0";
  } else {
      sidebar.style.width = "250px";
      content.style.marginLeft = "250px";
  }
}



//mapa 
//toggle button
$('.js-toggle').on('click', function(){
	$('.map-base').toggleClass('active');
});


//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
 {
	 indexes:["up to no good"],
	 action:function() {
		 $('.map-base').addClass('active');
	 }
 }, {
	 indexes:["mischief managed"],
	 action:function() {
		 $('.map-base').removeClass('active');
	 }
 }
]

artyom.addCommands(commands);

function startContinuousArtyom(){
    artyom.fatality();

    setTimeout(function(){
         artyom.initialize({
            lang:"en-GB",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

startContinuousArtyom();