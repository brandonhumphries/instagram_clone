var images = [
    {caption: 'Roswell Bridge', url: "img/roswell_bridge.jpg"},
    {caption: 'Google Clone', url: "img/google_clone_screenshot.png"}, 
    {caption: 'Roswell City Hall', url: "img/roswell_city_hall.jpg"}, 
    {caption: 'Roswell War Memorial', url: "img/war_memorial.jpg"}, 
    {caption: 'Canton Street', url: "img/canton_street.jpg"}, 
    {caption: 'Falls at Roswell Mill', url: "img/fall_at_roswell_mill.jpg"}, 
    {caption: 'Bulloch Hall', url: "img/bulloch_hall.JPG"}
];


var container = document.querySelector('.main-photos');
var currentI;
var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');
var lightButton = document.querySelector(".light-button");
var lightBox = document.querySelector(".lightbox-main");
var lightBoxImage = document.querySelector(".lightbox-photo");
var lightBoxCaption = document.querySelector(".lightbox-caption");

for (var i = 0; i < images.length; i++) {
    (function () {
        var image = images[i];
        var currentNum = i;
        var newImage = document.createElement('img');
        newImage.setAttribute('src', image.url);
        newImage.classList.add('photo');

        var caption = document.createElement('p');
        caption.textContent = image.caption;
        caption.classList.add('caption');

        var listItem = document.createElement('li');
        listItem.appendChild(newImage);
        listItem.appendChild(caption);
        listItem.classList.add('photo-container');

        var clickHandler = function () {
            currentI = currentNum;
            lightBoxImage.setAttribute('src', image.url);
            lightBoxCaption.textContent = image.caption;
            lightBox.classList.remove("hidden");
        }

        listItem.addEventListener('click', clickHandler);

        
        container.appendChild(listItem);


    })();
}


var imageBack = function () {
    currentI = (currentI + images.length - 1) % images.length;
    lightBoxImage.setAttribute('src', images[currentI].url);
    lightBoxCaption.textContent = images[currentI].caption;
};

var imageForward = function () {
    currentI = (currentI + images.length + 1) % images.length;
    lightBoxImage.setAttribute('src', images[currentI].url);
    lightBoxCaption.textContent = images[currentI].caption;
};

leftButton.addEventListener('click', imageBack);
rightButton.addEventListener('click', imageForward);



// var lightButton = document.querySelector(".light-button");

lightButton.addEventListener('click', function(){
    var lightBox = document.querySelector(".lightbox-main");
    lightBox.classList.add("hidden");
});


var addNewImage = function (image, i) {
    // var image = images[i];
    // var currentNum = i;
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.url);
    newImage.classList.add('photo');

    var caption = document.createElement('p');
    caption.textContent = image.caption;
    caption.classList.add('caption');

    var listItem = document.createElement('li');
    listItem.appendChild(newImage);
    listItem.appendChild(caption);
    listItem.classList.add('photo-container');

    // var lightBoxImage = document.querySelector(".lightbox-photo");
    // var lightBoxCaption = document.querySelector(".lightbox-caption");
    // var lightBox = document.querySelector(".lightbox-main");

    var clickHandler = function () {
        currentI = i;
        lightBoxImage.setAttribute('src', image.url);
        lightBoxCaption.textContent = image.caption;
        lightBox.classList.remove("hidden");
    }

    listItem.addEventListener('click', clickHandler);

    
    container.appendChild(listItem);

}

images.forEach(addNewImage)