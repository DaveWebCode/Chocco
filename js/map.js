let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.752004, 37.576133],
        zoom: 14,
        controls: []
    });

const coords = [
    [55.749455, 37.613473],
    [55.757235, 37.576968],
    [55.744517, 37.578641],
    [55.749695, 37.597943]
];

const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false, 
    iconLayout: 'default#image',
    iconImageHref: "./img/marker.png",
    icon_imagesize: [30, 42],
    iconImageOffset: [-3, -42]
});

coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
});

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');
myMap.behaviors.disable('drag');
}

ymaps.ready(init);