const menuButton=document.getElementById("menuButton");const sideMenu=document.getElementById("sideMenu");const menuOverlay=document.getElementById("menuOverlay");
function openMenu(){sideMenu?.classList.add("open");menuOverlay?.classList.add("open");}
function closeMenu(){sideMenu?.classList.remove("open");menuOverlay?.classList.remove("open");}
menuButton?.addEventListener("click",openMenu);menuOverlay?.addEventListener("click",closeMenu);
document.querySelectorAll(".side-menu a").forEach(link=>link.addEventListener("click",closeMenu));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu();});