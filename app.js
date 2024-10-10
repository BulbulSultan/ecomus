const products_section = document.getElementById('products-section');
const mehsullar = [
    {
        id: 1,
        ad: 'Ribbed Tank Top 1',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["green", 'black']
    },
    {
        id: 2,
        ad: 'Ribbed Tank Top 2',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["yellow", 'black']
    },
    {
        id: 3,
        ad: 'Ribbed Tank Top 3',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["blue", 'black']
    },
    {
        id: 4,
        ad: 'Ribbed Tank Top',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["orange", 'black']
    },
    {
        id: 5,
        ad: 'Ribbed Tank Top',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["orange", 'black']
    },
    {
        id: 6,
        ad: 'Ribbed Tank Top',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["orange", 'black']
    },
    {
        id: 7,
        ad: 'Ribbed Tank Top',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["orange", 'black']
    },
    {
        id: 8,
        ad: 'Ribbed Tank Top',
        sekil: './assets/images/./p-d2.webp',
        qiymet: 18.00,
        rengler: ["orange", 'black']
    },
];

const showProductsInSection = (arr) => {
    arr.forEach(item => {
        products_section.innerHTML += `
        <div class="w-1/4 relative">
            <img class="w-72 rounded-lg" src='${item.sekil}' alt="">
            <p class="mt-3">${item.ad}</p>
            <h2 class="font-medium mt-2">$${item.qiymet}</h2>
            <i class="fa-solid fa-circle text-${item.rengler[0]}-500 mt-2"></i>
            <i class="fa-solid fa-circle text-${item.rengler[1]} mt-2"></i>
        </div>
        `
    })
}
showProductsInSection(mehsullar)

const star = document.getElementById('star_section')
const boxes = [
    {
        id: 1,
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
        ad: 'Best Online Fashion Site',
        paragraf: 'I always find something stylish and affordable on this web fashion site',
        qisa_ad: ' Robert smith',
        paragraf2: 'Customer from USA',
        img: './assets/images/./cate2.webp',
        paragraf3: 'Jersey thong body',
        qiymet: '$112.00'
    },
    {
        id: 1,
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
        ad: 'Best Online Fashion Site',
        paragraf: 'I always find something stylish and affordable on this web fashion site',
        qisa_ad: ' Robert smith',
        paragraf2: 'Customer from USA',
        img: './assets/images/./cate2.webp',
        paragraf3: 'Jersey thong body',
        qiymet: '$112.00'
    },
    {
        id: 1,
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
        ad: 'Best Online Fashion Site',
        paragraf: 'I always find something stylish and affordable on this web fashion site',
        qisa_ad: ' Robert smith',
        paragraf2: 'Customer from USA',
        img: './assets/images/./cate2.webp',
        paragraf3: 'Jersey thong body',
        qiymet: '$112.00'
    }
];

['<li><i class="${icon} text-orange-600"></i></li>'].join('')
const starbox = (arr) => {
    arr.forEach(item => {
        star.innerHTML += `
        <div class="w-46 border-2 border-gray-300 rounded-md">
            <div>
                <ul class="flex mt-11 ml-10 gap-3">
                ${item.rating.map((icon) => `<li>
                        <i class="${icon} text-orange-600"></i>
                    </li>`).join('')}
                </ul>
                <h3 class="ml-10 font-medium text-xl mt-5">${item.ad}</h3>
                <p class="my-5 ml-10 w-80 text-lg">${item.paragraf}</p>
                <p class="font-medium ml-10"> ${item.qisa_ad}</p>
                    <p class="ml-10 ">${item.paragraf2}</p>
                    <div class="xett px-1 py-0.5 bg-slate-200 my-6 ml-10 mr-10"></div>
            </div>
            <div class="flex ml-10 gap-5">
                <div>
                    <img class="w-20 mb-10" src="${item.img}" alt="">
                </div>
                <div class="mt-10">
                    <p>${item.paragraf3}</p>
                    <p class="font-medium">${item.qiymet}</p>
                </div>
            </div>
        </div>
        `
    })
}
starbox(boxes)

const sekil = document.getElementById('img_section')
const sekiller = [
    {
        id: 1,
        img: './assets/images/./001fashion-brand-01.webp'
    },
    {
        id: 2,
        img: './assets/images/./001fashion-brand-02.png'
    },
    {
        id: 3,
        img: './assets/images/./001fashion-brand-03.webp'
    },
    {
        id: 4,
        img: './assets/images/./001fashion-brand-04.webp'
    },
    {
        id: 5,
        img: './assets/images/./001fashion-brand-05.webp'
    },
    {
        id: 6,
        img: './assets/images/./001fashion-brand-06.webp'
    }

];
const images = (arr) => {
    arr.forEach(item => {
        sekil.innerHTML += `
                    <li class="border-2 border-gray-200 rounded-l-lg">
                        <img src="${item.img}" alt="">
                    </li>`
    })
}
images(sekiller)


const pic = document.getElementById('section_pic')
const picArr = [
    {
        id: 1,
        img1: './assets/images/./im1.webp'
    },
    {
        id: 2,
        img2: './assets/images/./im1.webp'
    },
    {
        id: 3,
        img3: './assets/images/./im1.webp'
    },
    {
        id: 4,
        img4: './assets/images/./im1.webp'
    },
    {
        id: 5,
        img5: './assets/images/./im1.webp'
    }
];
const picbox = (arr) => {
    arr.forEach(item => {
        pic.innerHTML += `
      <img class="w-60 rounded-lg" src="${item.img1}" alt="">
     <img class="w-60 rounded-lg" src="${item.img2}" alt="">
    <img class="w-60 rounded-lg" src="${item.img3}" alt="">
    <img class="w-60 rounded-lg" src="${item.img4}" alt="">
    <img class="w-60 rounded-lg" src="${item.img5}" alt="">`
    })
}
picbox(picArr)

const free = document.getElementById('shipping')
const freeArr = [
    {
        id: 1,
        icon: 'fa-solid fa-cube',
        name: 'Free Shipping',
        title: 'You will love at great low prices'
    },
    {
        id: 1,
        icon: 'fa-solid fa-cube',
        name: 'Free Shipping',
        title: 'You will love at great low prices'
    },
    {
        id: 1,
        icon: 'fa-solid fa-cube',
        name: 'Free Shipping',
        title: 'You will love at great low prices'
    },
    {
        id: 1,
        icon: 'fa-solid fa-cube',
        name: 'Free Shipping',
        title: 'You will love at great low prices'
    }

];

const freeShip = (arr) => {
    arr.forEach(item => {
        free.innerHTML += `
       <div class="border-2 border-gray-200 rounded-lg p-10 flex-column" >
                    <div class="mt-3">
                        <i class="${item.icon}"></i>
                    </div>
                    <h2 class="mt-6 font-medium text-lg">${item.name}</h2>
                    <p class="mt-2">${item.title}</p>
                </div>`
    })
}
freeShip(freeArr);




const companyDetails = {
    name: '',
    logo: './assets/images/./Ecomus.svg',
    address: 'Address: 1234 Fashion Street, Suite 567,',
    phone: '(212)555-1234',
    email: 'info@fashionshop.com',
    social: [
        {
            type: 'facebook',
            url: '#'
        }, {
            type: 'instagram',
            url: '#'
        }, {
            type: 'tiktok',
            url: '#'
        }, {
            type: 'youtube',
            url: '#'
        }, {
            type: 'linkedin',
            url: '#'
        }
    ]
};
const companyLogos = document.querySelectorAll('.company-logo');
companyLogos.forEach((teq) => {
    teq.setAttribute('src', companyDetails.logo)
});

document.getElementById('company-address').innerText = companyDetails.address;
document.getElementById('company-number').innerText = companyDetails.phone;
document.getElementById('company-email').innerText = companyDetails.email;
companyDetails.social.forEach(item =>{
    document.getElementById('social').innerHTML+= ` 
                        <li class="">
                            <a href='${item.url}'><i class="fa-brands fa-${item.type}"></i></a>
                        </li>`

})

const footerMenu1 = {
    title: 'Help',
    childs: [
        {
            id: 1,
            title: 'Privacy policy',
            url: '#'
        },
        {
            id: 2,
            title: 'Returns + Exchanges',
            url: '#'
        },
        {
            id: 3,
            title: 'Shipping',
            url: '#'
        },
        {
            id: 4,
            title: 'Terms & Conditions',
            url: '#'
        },
        {
            id: 5,
            title: 'FAQ’s',
            url: '#'
        },
        {
            id: 6,
            title: 'Compare',
            url: '#'
        },
        {
            id: 7,
            title: 'My Wishlist',
            url: '#'
        },
    ]
}

footerMenu1.childs.forEach(item =>{
    document.getElementById('help_menu').innerHTML+=`<li class="mt-1 hover:text-red-700">
                            <a href="${item.url}"> ${item.title}</a>
                        </li>`
})
document.getElementById('menu_title1').innerText = footerMenu1.title

const footerMenu2 = {
    title: 'Useful links',
    childs: [
        {
            title: 'Our Story',
            url: '#'
        },
        {
            title: 'Visit Our Store',
            url: '#'
        },
        {
            title: 'Contact Us',
            url: '#'
        },
        {
            title: 'About Us',
            url: '#'
        },
        {
            title: 'Account',
            url: '#'
        },
    ]
}
document.getElementById('links').innerText = footerMenu2.title
footerMenu2.childs.forEach(item =>{
   document.getElementById('useful_links').innerHTML+=` 
   <li class="mt-1 hover:text-red-700">
                        <a href="${item.url}">${item.title}</a>
                       </li>`
})


// const footerNavUpdate = () => {

// }
// footerNavUpdate();