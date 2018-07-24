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

for (var i = 0; i < images.length; i++) {
    var image = images[i];
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
    listItem.setAttribute('data-index', i);
    
    container.appendChild(listItem);
}


// var lightBox = function() {

// };
// var imageTest = document.querySelector('.photo-container');

// imageTest.addEventListener("click", function(event) {
//     console.log('It works');
// });

// var imageTest = document.querySelector('.photo-container');
// var target = document.querySelector('[url]');

// imageTest.addEventListener("click", function(event) {
//     event.preventDefault();
//     target.setAttribute('src', imageTest.getAttribute('url'));
//     console.log('It works');
// });


// var lightBox = function() {

// };
// var imageTest = document.querySelectorAll('.photo-container');
// var lightButton = document.querySelector('.light-button');


// lightButton.addEventListener('click', function (event) {
//     var lightBox = document.querySelector('.lightbox-main');
//     lightBox.classList.add('hidden');
// });

// imageTest.forEach(function (element) {
//     element.addEventListener('click', function (event) {
//         event.preventDefault();
//         var selectedImage = event.target.getAttribute('src');
//         // target.setAttribute('src', (selectedImage));
//         var lightBoxImage = document.querySelector('.lightbox-photo');
//         lightBoxImage.setAttribute('src', selectedImage);
//         var lightBoxMain = document.querySelector('.lightbox-main');
//         lightBoxMain.classList.remove('hidden');
//         // console.log('It works');
//         // console.log(target);
//         // console.log('a')
//         // console.log(imageTest);
//         // console.log(imageTest.getAttribute('src'));
//     // target.classList.toggle('.photo-container')
//     });
// });


// var lightBox = document.querySelector('.lightbox')



var clickTest = document.querySelectorAll(".photo-container");
var lightButton = document.querySelector(".light-button");

lightButton.addEventListener('click', function(event){
    var lightBox = document.querySelector(".lightbox-main");
    lightBox.classList.add("hidden");
});

clickTest.forEach(function (element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        
        console.log(element.textContent);
        console.log(event.target);
        console.log('Click Registered');
        console.log(event.currentTarget.getAttribute('data-index'));
        
        var selectedImage = event.target.getAttribute('src');
        var selectedCaption = element.textContent;
        var selectedIndex = event.target.getAttribute('data-index');
        
        console.log(selectedImage);
        console.log(selectedCaption);
        
        var lightBoxImage = document.querySelector(".lightbox-photo");
        lightBoxImage.setAttribute('src', selectedImage);
        
        var lightBoxCaption = document.querySelector(".lightbox-caption");
        lightBoxCaption.textContent = selectedCaption;
        console.log(lightBoxCaption.textContent);

        var lightBox = document.querySelector(".lightbox-main");
        lightBox.classList.remove("hidden");

    });
    
});