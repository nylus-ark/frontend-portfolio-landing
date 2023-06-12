const galleryImg = document.querySelectorAll('.works-gallery__wrapper');

galleryImg?.forEach((img) => {
  const playBtn = img?.querySelector('.works-gallery__play-btn');

  img?.addEventListener('mouseover', () => {
    togglePlayBtn('mouseover');
  }, false);

  img?.addEventListener('mouseout', () => {
    togglePlayBtn('mouseout');
  }, false);

  function togglePlayBtn(mouseEvent) {
    switch (mouseEvent) {
      case 'mouseover':
        playBtn?.classList.add('works-gallery__play-btn--visible');

        break;

      case 'mouseout':
        playBtn?.classList.remove('works-gallery__play-btn--visible');

        break;

      default:
        break;
    }
  }
});
