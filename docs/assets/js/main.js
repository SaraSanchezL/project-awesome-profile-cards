"use strict";const elementLegend1=document.querySelector(".js-legendDesign"),elementSection1=document.querySelector(".js-sectionDesign"),elementIcon1=document.querySelector(".js-iconDesign"),elementLegend2=document.querySelector(".js-legendFill"),elementSection2=document.querySelector(".js-sectionFill"),elementIcon2=document.querySelector(".js-iconFill"),elementLegend3=document.querySelector(".js-legendShare"),elementSection3=document.querySelector(".js-sectionShare"),elementIcon3=document.querySelector(".js-iconShare");function handlerClickLegend(){elementSection1.classList.toggle("hidden"),elementSection1.classList.contains("hidden")?(elementIcon1.classList.remove("fa-chevron-up"),elementIcon1.classList.add("fa-chevron-down")):(elementIcon1.classList.remove("fa-chevron-down"),elementIcon1.classList.add("fa-chevron-up"))}function handlerClickLegend2(){elementSection2.classList.toggle("hidden"),elementSection2.classList.contains("hidden")?(elementIcon2.classList.remove("fa-chevron-up"),elementIcon2.classList.add("fa-chevron-down")):(elementIcon2.classList.remove("fa-chevron-down"),elementIcon2.classList.add("fa-chevron-up"))}function handlerClickLegend3(){elementSection3.classList.toggle("hidden"),elementSection3.classList.contains("hidden")?(elementIcon3.classList.remove("fa-chevron-up"),elementIcon3.classList.add("fa-chevron-down")):(elementIcon3.classList.remove("fa-chevron-down"),elementIcon3.classList.add("fa-chevron-up"))}elementLegend1.addEventListener("click",handlerClickLegend),elementLegend2.addEventListener("click",handlerClickLegend2),elementLegend3.addEventListener("click",handlerClickLegend3);const inputName=document.querySelector(".js-name");function handlerInputName(){const e=document.querySelector(".js-cardName");""===inputName.value?e.innerHTML="Nombre Apellido":e.innerHTML=inputName.value}inputName.addEventListener("keyup",handlerInputName);