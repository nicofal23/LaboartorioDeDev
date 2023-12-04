function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
  } else {
      sidebar.style.width = "250px";
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