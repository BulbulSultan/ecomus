const boxes = document.getElementById ('box');


const mehsulDetal={
    ad:'Ribbed Tank Top',
    sekilleri:['./assets/images/./p-d2.webp', './assets/images/./p-d2-2.avif', './assets/images/./p-d2-2.avif', './assets/images/./p-d2-2.avif'],
    qiymet:18.00,
    cesid:['orange', 'red', 'black', 'green'],
    olculer:['S', 'M','L', 'XL'],
    viewRightNow:36,
    description:'Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.',
    features:['Front button placket', 'Adjustable sleeve tabs', 'Babaton embroidered crest at placket and hem'],
}

mehsulDetal.sekilleri.slice(1, 3).forEach(item=>{
    document.getElementById('imgs').innerHTML+=`
    <img class="w-16 lg:w-32 rounded-md border-black border" src="${item}" alt="">`
})
document.getElementById('base-image').src = mehsulDetal.sekilleri[0]
document.getElementById('prdouct-name').innerText = mehsulDetal.ad;
document.getElementById('product-price').innerText = mehsulDetal.qiymet;
document.getElementById('people-watch').innerText =mehsulDetal.viewRightNow;
mehsulDetal.cesid.forEach(item=>{
    document.getElementById('product-colors').innerHTML+=
    `<div class='product-colors' data-name='${item}' style='background-color: ${item}; width:30px; height:30px; border-radius:100%; '></div>`
});

let selectedColor = mehsulDetal.cesid[0];
mehsulDetal.cesid.forEach(item =>{
    document.getElementById('product-colors').innerHTML+=`
    <div id="selected-color" class="mt-5 text-gray-600">Color: <span class="text-gray-900">${item}</span></div>`
});

const changeSelectedColor = (e) => {
    selectedColor = e.target.textContent;
    document.getElementById('selected-color').innerText = selectedColor;
    document.querySelectorAll('.product-colors').forEach((btn)=>{
        btn.classList.remove('selected-color');
    })
    e.target.classList.add('selected-color')
}
document.querySelectorAll('.product-colors').forEach(btn=>btn.addEventListener('click', changeSelectedColor));



let selectedSize = mehsulDetal.olculer[0];
mehsulDetal.olculer.forEach(item =>{
    document.getElementById('product-sizes').innerHTML+= 
    `<div  class="product-size py-1 px-3 rounded-sm border border-gray-400 hover:border-black">${item}</div>`
});

const changeSelectedSize = (e) => {
    selectedSize = e.target.textContent;
    document.getElementById('selected-size').innerText = selectedSize;
    document.querySelectorAll('.product-size').forEach((btn)=>{
        btn.classList.remove('selected-size');
    })
    e.target.classList.add('selected-size')
}
document.querySelectorAll('.product-size').forEach(btn=>btn.addEventListener('click', changeSelectedSize));




const mehsul = [
    {
        id:1,
        icon:'fa-solid fa-ship',
        title:'Estimate delivery times: 12-26 days (International), 3-6 days (United States)'
    },
    {
        id:2,
        icon:'fa-solid fa-cube',
        title:'Return within 30 days of purchase. Duties & taxes are non-refundable.'
    }

];



const mehsulBox = (arr)=>{
    arr.forEach(item =>{
        boxes.innerHTML+=`
        <div class="text-center border border-gray-300 rounded-sm p-3">
            <i class="${item.icon} mt-5 text-lg"></i>
            <p class=" my-10">${item.title}.</p>
        </div>`
    })
}
mehsulBox(mehsul)









const img = document.getElementById('piks')
const mehsullar =[
    {
        id:1,
        pic:'./assets/images/./hmgoepprod_23.webp',
        name:'Ribbed Tank Top',
        qiymet:'$18.00',
        rengler:['orange', 'black']
    },
    {
        id:2,
        pic:'./assets/images/./hmgoepprod_23.webp',
        name:'Ribbed Tank Top',
        qiymet:'$18.00',
        rengler:['orange', 'black']
    },
    {
        id:3,
        pic:'./assets/images/./hmgoepprod_23.webp',
        name:'Ribbed Tank Top',
        qiymet:'$18.00',
        rengler:['orange', 'black']
    },
    {
        id:4,
        pic:'./assets/images/./hmgoepprod_23.webp',
        name:'Ribbed Tank Top',
        qiymet:'$18.00',
        rengler:['orange', 'black']
    }
];
const imgSection = (arr) =>{
    arr.forEach(item =>{
        img.innerHTML+=`
        <div class='flex flex-col'>
            <img class="w-72 rounded-lg" src="${item.pic}" alt="">
            <p class="mt-3">${item.name}</p>
            <h2 class="font-medium mt-2">${item.qiymet}</h2>
            <div class='flex gap-3'>
                <i class="fa-solid fa-circle text-${item.rengler[0]}-500 mt-2"></i>
                <i class="fa-solid fa-circle text-${item.rengler[1]} mt-2"></i>
            </div>
        </div>`
    })
}
imgSection(mehsullar)







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
