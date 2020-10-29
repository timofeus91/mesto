//стрелочная функция кнопки сердечко-лайк

const heartLikeChange = () => {
    if (heartLike.classList.contains('elements__heart-button_like')) {
        heartLike.classList.remove('elements__heart-button_like');
    }

    else {
        heartLike.classList.add('elements__heart-button_like');
    }
}