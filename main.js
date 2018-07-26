var images = [
    {caption: 'Roswell Bridge', url: "img/roswell_bridge.jpg"},
    {caption: 'Google Clone', url: "img/google_clone_screenshot.png"}, 
    {caption: 'Roswell City Hall', url: "img/roswell_city_hall.jpg"}, 
    {caption: 'Roswell War Memorial', url: "img/war_memorial.jpg"}, 
    {caption: 'Canton Street', url: "img/canton_street.jpg"}, 
    {caption: 'Falls at Roswell Mill', url: "img/fall_at_roswell_mill.jpg"}, 
    {caption: 'Bulloch Hall', url: "img/bulloch_hall.JPG"}
];


var container = $('.main-photos');
var currentI;
var leftButton = $('.left-button');
var rightButton = $('.right-button');
var lightButton = $(".light-button");
var lightBox = $(".lightbox-main");
var lightBoxImage = $(".lightbox-photo");
var lightBoxCaption = $(".lightbox-caption");

images.forEach(
    function (image, i) {
        var newImage = $('<img>');
        newImage.attr('src', image.url);
        newImage.addClass('photo');

        var caption = $('<p>');
        caption.text(image.caption);
        caption.addClass('caption');

        var listItem = $('<li>');
        listItem.append(newImage);
        listItem.append(caption);
        listItem.addClass('photo-container');

        var clickHandler = function () {
            currentI = i;
            lightBoxImage.attr('src', image.url);
            lightBoxCaption.text(image.caption);
            lightBox.removeClass("hidden");
        }

        listItem.on('click', clickHandler);

        container.append(listItem);
    }
)

var imageBack = function () {
    currentI = (currentI + images.length - 1) % images.length;
    lightBoxImage.attr('src', images[currentI].url);
    lightBoxCaption.text(images[currentI].caption);
};

var imageForward = function () {
    currentI = (currentI + images.length + 1) % images.length;
    lightBoxImage.attr('src', images[currentI].url);
    lightBoxCaption.text(images[currentI].caption);
};

leftButton.on('click', imageBack);
rightButton.on('click', imageForward);


lightButton.on('click', function(){
    var lightBox = $(".lightbox-main");
    lightBox.addClass("hidden");
});


