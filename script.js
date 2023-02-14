document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById('navMenu');


    [burger, menu].forEach(element => element.addEventListener('click', () => {
        if (burger.classList.contains('is-active')) {
            burger.classList.remove('is-active');
        } else {
            burger.classList.add('is-active');
        }
        if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
        } else {
            menu.classList.add('is-active');
        }
    }));

    let navLinks = document.querySelectorAll('.navbar-item');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        link.addEventListener('click', (event) => {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });


    const galleryImages = [
        'team2.jpeg',
        'team4.jpeg',
        'team5.jpg',
        'team7.jpg',
        'team8.jpg',
        'team9.jpg',
        'team10.jpg',
        'team3.jpeg',
        'team11.jpg',
        'team12.jpg',
        'team6.jpg',
        'team13.jpeg',
        'team1.jpeg'
    ];


    const home = document.getElementById('topLayer');

    const homeContainer = document.getElementById('bottomLayer');

    home.style.backgroundRepeat = 'no-repeat';
    home.style.backgroundSize = 'cover';
    home.style.backgroundPosition = 'center';

    homeContainer.style.backgroundRepeat = 'no-repeat';
    homeContainer.style.backgroundSize = 'cover';
    homeContainer.style.backgroundPosition = 'center';

    home.style.animationTimingFunction = 'ease-in-out';
    home.style.animationDuration = '1s';

    function setBackground(image, direction) {
        let nextImage = image + 1;
        if (image === 12) {
            nextImage = 0;
        }

        //fade in / out

        if (direction === "in") {
            home.style.animationName = 'backgroundFadeIn';
            setTimeout(() => {
            home.style.opacity = '1';
            homeContainer.style.backgroundImage = `url("media/${galleryImages[image]}")`;
            }, 1000);
            
        } else {
            home.style.animationName = 'backgroundFadeOut';
            setTimeout(() => {
                home.style.opacity = '0';
                home.style.backgroundImage = `url("media/${galleryImages[image]}")`;
            }, 1000);
        }

        const nextDirection = direction === 'in' ? 'out' : 'in';

        setTimeout(() => setBackground(nextImage, nextDirection), 5000);

    }

    setBackground(0, 'in');

    // const gallery = document.getElementById('gallery');

    // const galleryImages = [
    //     'team1.jpeg',
    //     'team2.jpeg',
    //     'team3.jpeg',
    //     'team4.jpeg',
    //     'team5.jpeg',
    // ];

    // const previousChildren = gallery.childNodes;
    // gallery.innerHTML = '';

    // galleryImages.forEach(imageSrc => {
    //     const img = document.createElement('img');
    //     img.setAttribute('src', `/media/${imageSrc}`);
    //     img.style.position = 'absolute';
    //     gallery.appendChild(img);
    // })

    // previousChildren.forEach(child => {
    //     gallery.appendChild(child)
    // })


});
