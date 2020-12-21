//стрелочная функция кнопки сердечко-лайк

const heartLikeChange = () => {
    if (heartLike.classList.contains('elements__heart-button_like')) {
        heartLike.classList.remove('elements__heart-button_like');
    }

    else {
        heartLike.classList.add('elements__heart-button_like');
    }
}


//пример кода по клонированию-добавлению шаблонных карточек- кнопке лайк и прочее

function addSong(artistValue, titleValue) {
    const songTemplate = document.querySelector('#song-template').content;
    const songElement = songTemplate.cloneNode(true);
  
    songElement.querySelector('.song__artist').textContent = artistValue;
    songElement.querySelector('.song__title').textContent = titleValue;
    songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    
      evt.target.classList.toggle('song__like_active');
  }); 
     songsContainer.append(songElement);
  }




  //небольшой пример по функции открытия попапа для всех попапов

  function openPopup(popupElement) {
    // ...
  }
  
  // эту функцию можно переиспользовать для разных попапов
  
  editPopupButton.addEventListener('click', function () {
    openPopup(editPopup); // открываем попап редактирования
  });
  
  newItemPopupButton.addEventListener('click', function () {
    openPopup(newItemPopup); // открываем попап добавления
  });