function toggleOurServicesItem() {
    let tabItems = document.querySelectorAll('.our-services-tablinks');
    let contentItems = document.querySelectorAll('.our-service-tabcontent');

    function changeClass(event) {
        tabItems.forEach(item => { item.classList.remove('active') });
        event.target.classList.add('active');
        toggleContentItem(event.target);
    }

    let maxHeight = 0;

    function toggleContentItem(activeItem) {
        contentItems.forEach(item => {
            item.style.display = 'none';
            if (item.id === activeItem.dataset.name) {
                item.style.display = 'flex';
                // let currHeight = (item.offsetHeight < maxHeight) ? maxHeight : item.offsetHeight;
                // item.style.height = currHeight + 'px';
                // maxHeight = currHeight;
            }
        });
    }

    function init() {
        tabItems.forEach(function (item, index) {
            item.dataset.name = item.textContent;
            contentItems[index].id = item.textContent;
            if (index === 0) toggleContentItem(item);
            item.addEventListener('click', changeClass);
        });
    }
    init();
}


function manageImage() {
    let imageArray = [
        {
            img: './img/graphic_design/graphic-design2.jpg',
            category: 'wordpress',
        },
        {
            img: './img/graphic_design/graphic-design3.jpg',
            category: 'landing-pages',
        },
        {
            img: './img/graphic_design/graphic-design4.jpg',
            category: 'graphic-design',
        },
        {
            img: './img/graphic_design/graphic-design5.jpg',
            category: 'web-design',
        },
        {
            img: './img/graphic_design/graphic-design6.jpg',
            category: 'wordpress',
        },
        {
            img: './img/graphic_design/graphic-design7.jpg',
            category: 'landing-pages',
        },
        {
            img: './img/graphic_design/graphic-design8.jpg',
            category: 'web-design',
        },
        {
            img: './img/graphic_design/graphic-design9.jpg',
            category: 'graphic-design',
        },
        {
            img: './img/graphic_design/graphic-design10.jpg',
            category: 'landing-pages',
        },
        {
            img: './img/graphic_design/graphic-design11.jpg',
            category: 'web-design',
        },
        {
            img: './img/graphic_design/graphic-design2.jpg',
            category: 'wordpress',
        },
        {
            img: './img/graphic_design/graphic-design3.jpg',
            category: 'landing-pages',
        },
        {
            img: './img/graphic_design/graphic-design4.jpg',
            category: 'graphic-design',
        },
        {
            img: './img/graphic_design/graphic-design5.jpg',
            category: 'web-design',
        },
        {
            img: './img/graphic_design/graphic-design12.jpg',
            category: 'wordpress',
        },

        {
            img: './img/wordpress/wordpress1.jpg',
            category: 'web-design',
        },
        {
            img: './img/wordpress/wordpress2.jpg',
            category: 'landing-pages',
        },
        {
            img: './img/wordpress/wordpress3.jpg',
            category: 'wordpress',
        },
        {
            img: './img/wordpress/wordpress4.jpg',
            category: 'graphic-design',
        },
        {
            img: './img/wordpress/wordpress5.jpg',
            category: 'web-design',
        },
        {
            img: './img/wordpress/wordpress6.jpg',
            category: 'web-design',
        },
        {
            img: './img/wordpress/wordpress7.jpg',
            category: 'landing-pages',
        },
        {
            img: './img/wordpress/wordpress8.jpg',
            category: 'web-design',
        },
        {
            img: './img/wordpress/wordpress9.jpg',
            category: 'graphic-design',
        },

    ];

    let workSection = document.querySelector('.work');
    let loadMore = workSection.querySelector('.load-more.web');
    let gallery = workSection.querySelector('.work-gallery');
   
    function loadMoreHandler(e) {
        e.preventDefault();

        let imagesToLoad = imageArray.splice(0, 12);
        let galleryHtml = '';

        imagesToLoad.forEach(function (item) {
            galleryHtml += `<li data-cat="${item.category}"><a><div class="work-portfolio-item">
            <img src="${item.img}" /></div></a></li>`;
        });
        gallery.innerHTML += galleryHtml;
        let filterImages = gallery.querySelectorAll('.work-gallery li');
        if (imageArray.length === 0) loadMore.remove();

    }
    loadMore.addEventListener('click', loadMoreHandler);
}

function filterWorkImages() {
    let filterTab = document.querySelectorAll('.work-filter-tab');
    
        function init() {
            filterTab.forEach(function (item) {
                
                item.addEventListener('click', () => {
                    filterTab.forEach(item => { item.classList.remove('active') });
                    let filterImages = document.querySelectorAll('.work-gallery li');
                    filterImages.forEach(filterItem => {
                        filterItem.style.display = 'none';
                        if (filterItem.dataset.cat === item.dataset.cat) {
                            filterItem.style.display = 'block';
                        }
                        else if (item.dataset.cat === 'all') {
                            filterItem.style.display = 'block';
                        };
                });
            });
        })
    };

init();
}

    document.addEventListener('DOMContentLoaded', function () {
        let MainFunc = toggleOurServicesItem();
        manageImage();
        filterWorkImages();
    });
    
    jQuery(document).ready(function($){
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider',
            // centerMode: true,
            dots: false,
            focusOnSelect: true,
            width: '50px'
        });
    });


    jQuery(document).ready(function($) {
        $('.best-images-elements').masonry({
            itemSelector: '.best-image-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
    });