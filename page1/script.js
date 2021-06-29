//  $(function(){
// 	  //hiệu ứng khi kích vào class nutmenu
//  	 $('.icon').click(function() {
//         $('.menu-left').addClass('ra');
//         return false;
//     });
//     //dong menu
//  	 $('.fa-times').click(function(event) {
//         $('.menu-left').removeClass('ra');
//         return false;
//     });


    
// })  
 

function changeClass(){
    let menu = document.getElementsByClassName("menu-left")[0];
    menu.classList.add("ra");
}

function closeMenu() {
    let menu = document.getElementsByClassName("menu-left")[0];
    menu.classList.remove("ra");
}