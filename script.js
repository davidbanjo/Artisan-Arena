const menuBtn = document.querySelector('.menuBtn');
const mobileNavCont = document.querySelector('.mobileNavContainer');
const closeMenuBtn = document.querySelector('.closeMenuIcon')
const navItems = document.querySelectorAll('.fadeOut')
const focusIn = document.querySelectorAll('.fadeIn')

menuBtn.onclick = () => {
    mobileNavCont.classList.add('aa_nav-container-slide-in');
    focusIn.forEach((item) => {
        item.classList.add('aa_nav-container-text-focus-in')
    })
}
closeMenuBtn.onclick = () => {
    focusIn.forEach((item) => {
        item.classList.remove('aa_nav-container-text-focus-in')
    })
    navItems.forEach((item) => {
        item.classList.add("aa_nav-container-text-blur-out")
    })
    setTimeout(() => {
        navItems.forEach((item) => {
            item.classList.remove("aa_nav-container-text-blur-out")
        })
        mobileNavCont.classList.remove('aa_nav-container-slide-in');
    }, 1200)
} 

// slider

(() => {
    //If you want to add more images, add the link name and URL image URL in the array list below.
        const images_list = [
    {
        "url": "./img/shoemaker.jpg",
        "alt": "",
        "name": "shoemaker",
        "link": ""
    },
    {
        "url": "./img/tailor.jpg",
        "alt": "",
        "name": "tailor",
        "link": ""
    },
    {
        "url": "./img/barber.jpg",
        "alt": "",
        "name": "barber",
        "link": ""
    },
    {
        "url": "./img/bricklayer.jpg",
        "alt": "",
        "name": "bricklayer",
        "link": ""
    },
    {
        "url": "./img/vulcanizer.jpg",
        "alt": "",
        "name": "vulcanizer",
        "link": ""
    }
        ];
    
    // generated by https://www.html-code-generator.com/html/image-slideshow-generator
        let slider_id = document.querySelector("#hcg-slider-1");
        const artisanName = document.querySelector('.artisanName');



        // append all images
        let dots_div = "";
        let images_div = "";
        for (let i = 0; i < images_list.length; i++) {
            // if no link without href="" tag
            let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
            images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
                            '<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
                         '</a>';
            
        }

        slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;

        let slide_index = 0;
    
        const images = slider_id.querySelectorAll(".hcg-slides");
        const showSlides = () => {
            if (slide_index > images.length-1) {
                slide_index = 0;
            }
            if (slide_index < 0) {
                slide_index = images.length-1;
            }
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
                if (i == slide_index) {
                    images[i].style.display = "flex";
                }
                
            }
        }
    
        // auto play
        setInterval(() => {
            slide_index++;
            showSlides();
        }, 5000);
    
    })();