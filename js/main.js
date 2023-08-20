// // burger
// let burger = document.querySelector('.burger');
// let overlay = document.querySelector('.overlay');
// let body = document.querySelector('body');

// let links = document.querySelectorAll('.menu__link');

// links.forEach(function(element){
//     element.addEventListener('click', toggleMenu);
// })

// function toggleMenu(){
//     burger.classList.toggle('burger--active');
//     overlay.classList.toggle('overlay--active');
//     body.classList.toggle('body--active-menu');
// }

// burger.addEventListener('click', toggleMenu);

// //slider
// let list = document.querySelector(".slider");
// let controls = document.querySelector(".slider-button");
// let currentIndex = 0;

// const slider = (event) => {
//   let target = event.target;

//   if (target.classList.contains("slider-button--link")) {
//     let targetValue = target.dataset.vector;

//     if (targetValue === "next") {
//       if (currentIndex < list.children.length - 1) {
//         currentIndex += 1;
//         doTransition(currentIndex);
//       } else return;
//     }

//     if (targetValue === "prev") {
//       if (currentIndex > 0) {
//         currentIndex -= 1;
//         doTransition(currentIndex);
//       } else return;
//     }
//   }
// };

// function doTransition(index) {
//   list.style.transform = `translateX(-${index * 100}%)`;
// }

// controls.addEventListener("click", slider);


// //accordion team section
// function accordionTeam() {
//     const workers = document.querySelectorAll(".person");
//     const teamAccord = document.querySelector(".team__list");

//     teamAccord.addEventListener("click", function (event) {
//         event.preventDefault();
//         const target = event.target;

//         if (target.classList.contains("person__name")) {
//             const worker = target.parentNode;
//             const content = target.nextElementSibling;
//             const contentHeight = content.firstElementChild.clientHeight;

//             for (const iterator of workers) {
//                 if (iterator !== worker) {
//                     iterator.classList.remove("person-active");
//                     iterator.lastElementChild.style.height = 0;
//                 }
//             }

//             if (worker.classList.contains("person-active")) {
//                 worker.classList.remove("person-active");
//                 content.style.height = 0;
//               } else {
//                 worker.classList.add("person-active");
//                 content.style.height = contentHeight + "px";
//               }
//         }
//     });
// }

// accordionTeam();

// //reviews
// const reviewsBar = document.querySelector('.reviews__switcher');
// const reviewsItems = document.querySelectorAll('.reviews__switcher-button');
// const reviewWrapp = document.querySelectorAll('.reviews__item');

// reviewsBar.addEventListener('click' , e=>{
//    e.preventDefault();
  
//   // console.log(Array.from(reviewsBar.children))
  
//   if(e.target.classList.contains('interactive-avatar__button')){
//     const currentPeopleLink = e.target;
//     const currentPeopleItem = currentPeopleLink.closest('.reviews__switcher-button')
//     const currentPeopleId = currentPeopleItem.id;
    
//     for (const iterator of reviewsItems) {
//       if(iterator !== currentPeopleItem){
//         iterator.classList.remove("interactive-avatar--active");
//       }
//     }
    
//     if(!currentPeopleItem.classList.contains('interactive-avatar--active')){
//       currentPeopleItem.classList.add("interactive-avatar--active");
//     }
    
//     reviewWrapp.forEach(function(wrapp){
//       if(currentPeopleId == wrapp.id){
//         wrapp.classList.add('reviews__item--active');
//       }else{
//         wrapp.classList.remove('reviews__item--active');
//       }
//     })
//   }
// });


// //order
// const orderForm = document.querySelector('#orderForm');
// const sendButton = document.querySelector('#sendButton');

// sendButton.addEventListener('click', function(event) {
//     event.preventDefault();

//     if (validateForm(orderForm)) {
//         const data = {
//             name: orderForm.elements.name.value,
//             phone: orderForm.elements.phone.value,
//             comment: orderForm.elements.comment.value,
//             to: orderForm.elements.comment.value
//         };

//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//         xhr.setRequestHeader('content-type', 'application/json');
//         xhr.send(JSON.stringify(data));
//         // xhr.addEventListener('load', () => {
//         //     if (xhr.response.status) {
//         //         console.log('Все ок!');
//         //     }
//         // });
//     }
// });

//     function validateForm(form) {
//         let valid = true;

//         if (!validateField(form.elements.name)) {
//             valid = false;
//         }
//         if (!validateField(form.elements.phone)) {
//             valid = false;
//         }
//         if (!validateField(form.elements.street)) {
//             valid = false;
//         }
//         if (!validateField(form.elements.home)) {
//             valid = false;
//         }

//         return valid;
//     }

//     function validateField(field) {
//         if (!field.checkValidity()) {
//             field.nextElementSibling.textContent = field.validationMessage;

//             return false;
//         } else {
//             field.nextElementSibling.textContent = '';

//             return true;
//         }
//     }