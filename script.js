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
        'team1.jpeg',
        'team2.jpeg',
        'team3.jpeg',
        'team4.jpeg',
        'team5.jpg',
    ];


    const home = document.getElementById('home');
    home.style.backgroundRepeat = 'no-repeat';
    home.style.backgroundSize = 'cover';
    home.style.backgroundPosition = 'center';

    function setBackground(pastImage) {
        let image = pastImage + 1;
        if(pastImage === 4){
            image = 0;
        }
        home.style.backgroundImage = `url("media/${galleryImages[image]}")`;
        console.log('hi', image, galleryImages[image])

        setTimeout(() => setBackground(image), 5000);
    }

    setBackground(0)

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
