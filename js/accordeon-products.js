const mesureWidth = item => {
  const screenWidth = $(window).width();
  const container = item.closest(".products-menu");
  const titlesBlocks = container.find(".product-menu__block");
  const titlesWidth = 90 * titlesBlocks.length;
  
  const isTablets = window.matchMedia("(max-width: 768px)").matches;

  if (isTablets) {
    return screenWidth - titlesWidth;
  } else {
    return 500;
  }

}

const closeEveryItemInContainer = (container) => {
  const items = container.find(".products-menu__item");
  const content = container.find(".products-menu__content");

  items.removeClass("active");
  content.width(0);
}

const openItem = (item) => {
const hiddenContent = item.find(".products-menu__content");
const reqWidth = mesureWidth(item);

item.addClass("active");
hiddenContent.width(reqWidth);
}

$(".products-menu__item").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".products-menu__item");
  const itemOpened = item.hasClass("active");
  const container = $this.closest(".products-menu");

  if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    openItem(item);
  }
});