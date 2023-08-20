const reviewsBar = document.querySelector('.reviews__switcher');
const reviewsItems = document.querySelectorAll('.reviews__switcher-button');
const reviewWrapp = document.querySelectorAll('.reviews__item');

reviewsBar.addEventListener('click' , e=>{
   e.preventDefault();
  
  // console.log(Array.from(reviewsBar.children))
  
  if(e.target.classList.contains('interactive-avatar__button') || e.target.classList.contains('interactive-avatar__img')){
    const currentPeopleLink = e.target;
    const currentPeopleItem = currentPeopleLink.closest('.reviews__switcher-button')
    const currentPeopleId = currentPeopleItem.id;
    
    for (const iterator of reviewsItems) {
      if(iterator !== currentPeopleItem){
        iterator.classList.remove("interactive-avatar--active");
      }
    }
    
    if(!currentPeopleItem.classList.contains('interactive-avatar--active')){
      currentPeopleItem.classList.add("interactive-avatar--active");
    }
    
    reviewWrapp.forEach(function(wrapp){
      if(currentPeopleId == wrapp.id){
        wrapp.classList.add('reviews__item--active');
      }else{
        wrapp.classList.remove('reviews__item--active');
      }
    })
  }
});