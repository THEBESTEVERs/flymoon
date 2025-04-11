/*menu open close function*/
 function openMenu() {
    document.querySelector('.menu-con').classList.add('show');
 }
 function closeMenu() {
    document.querySelector('.menu-con').classList.remove('show');
    micon.innerHTML = '<i class="ri-menu-fill"></i>';
 }
 
 
 
 let menuBtn = document.querySelector('#menuBtn');
 let micon = document.querySelector('.menu1');
 
 menuBtn.addEventListener('click', () => {
    if (micon.innerHTML.includes('ri-menu-fill')) {
       micon.innerHTML = '<i class="ri-close-large-fill"></i>';
       openMenu(); 
    } else {
       micon.innerHTML = '<i class="ri-menu-fill"></i>';
       closeMenu()
    }
 });
 
 
 
//  acordian function
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
         panel.style.display = "none";
      } else {
         panel.style.display = "block";
      }
   });
};




/* add link in buy btn*/
let buy = document.querySelector('.buy')
buy.onclick = function(){
   window.location.href = 'https://amzn.in/d/8GHZbUH'
}

/* for icons*/
 document.querySelectorAll('.s-link').forEach(function(button) {
    button.onclick = function() {
       window.location.href = 'https://www.instagram.com/aman_kr87?utm_source=qr&igsh=b2hkZTM2MDJveTFw';
    };
 });
