"use strict";$((function(){$("#elem-2-block-1").mouseover((function(){$(".moving-stick-block-1").css("margin-left","415px")})),$("#elem-2-block-1").mouseout((function(){$(".moving-stick-block-1").css("margin-left","60px")})),$("#elem-3-block-1").mouseover((function(){$(".moving-stick-block-1").css("margin-left","759px")})),$("#elem-3-block-1").mouseout((function(){$(".moving-stick-block-1").css("margin-left","60px")})),$("#elem-4-block-1").mouseover((function(){document.querySelector("#elem-4-block-1").getBoundingClientRect();var e=document.querySelector(".chain-block-1"),o=document.querySelector("main");e.clientWidth||e.offsetWidth,e.clientWidth;console.log(o.clientWidth-e.clientWidth);var t=o.clientWidth-e.clientWidth;$(".moving-stick-block-1").css("margin-left",e.clientWidth-t+"px")})),$("#elem-4-block-1").mouseout((function(){$(".moving-stick-block-1").css("margin-left","60px")}))})),$(document).ready((function(){document.getElementById("back");$(".navbar-toggler").click((function(e){$(".header").toggleClass("flag"),$(".navbar-toggler").toggleClass("menu-active")})),$(".gallery").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:4,adaptiveHeight:!0,prevArrow:!1,nextArrow:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!1,prevArrow:!1,nextArrow:!1,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,prevArrow:!1,nextArrow:!1,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,prevArrow:!1,nextArrow:!1,slidesToScroll:1}}]})}));