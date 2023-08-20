function accordionTeam() {

    function getCorrectNode(){
        let teamAccord = null;

        if(getComputedStyle(document.querySelector(".team__list--mobile")).display === 'none'){
            teamAccord = document.querySelector('.team__list--pc')
        }else{
            teamAccord = document.querySelector('.team__list--mobile')
        }

        teamAccord.addEventListener('click' , doSmth)
    }

    window.addEventListener('resize' , getCorrectNode)

    function doSmth(event){
        event.preventDefault();

        const target = event.target;
        const workers = event.currentTarget.children;

        if (target.classList.contains("person__name")) {
            const worker = target.parentNode;
            const content = target.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;

            for (const iterator of workers) {
                if (iterator !== worker) {
                    iterator.classList.remove("person-active");
                    iterator.lastElementChild.style.height = 0;
                }
            }

            if (worker.classList.contains("person-active")) {
                worker.classList.remove("person-active");
                content.style.height = 0;
              } else {
                worker.classList.add("person-active");
                content.style.height = contentHeight + "px";
              }
        }
    }

    getCorrectNode()
}

accordionTeam();