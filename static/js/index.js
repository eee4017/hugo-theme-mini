(function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header.profile');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }
      lastScrollTop = scrollTop;
    });
  })();