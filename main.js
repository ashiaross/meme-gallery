var $gallery = document.querySelector('main');

var imageUrls = [
  'https://miro.medium.com/max/720/1*0gGwf9zc_z7cnW4QY4Dorg.jpeg',
  'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png',
  'https://a.pinatafarm.com/599x416/e877f6fcba/crying-cat.jpg',
  'https://media.tenor.com/D43c0qwX_TEAAAAC/sick-thats.gif',
  'https://miro.medium.com/max/640/1*qDRiLcmpYF5qU4vsJWnz2A.png',
  'https://c.tenor.com/FE6caXZ5sS0AAAAC/confused-wth.gif',
  'https://c.tenor.com/Hgtpde9C-78AAAAC/kid-awkward.gif',
  'https://i.kym-cdn.com/photos/images/facebook/002/034/027/aed',
  'https://i.guim.co.uk/img/media/3159275f03b6d13012c68de130bdae219f19acd1/43_0_817_490/master/817.jpg?width=1125&quality=85&dpr=1&s=none'
];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
