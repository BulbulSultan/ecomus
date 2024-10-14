const img = document.getElementById('tank_top')
const mehsullar = [
    {
        id: 1,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Ribbed Tank Top',
        qiymet: 1800,
        categories: 'men',
        featured: true,
        bestSelling: false,
        availability: 4,
        brand: 'ecomus',
        size: ['s'],
        rengler: ['orange', 'black', 'blue']
    },
    {
        id: 2,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Tank Top',
        qiymet: 1000,
        categories: 'women',
        featured: false,
        bestSelling: true,
        availability: 7,
        brand: 'ecomus',
        size: ['s', 'm', 'l'],
        rengler: ['orange', 'black']
    },
    {
        id: 3,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Top',
        qiymet: 300,
        categories: 'fashion',
        featured: false,
        bestSelling: true,
        brand: 'MH',
        size: ['s', 'l'],
        availability: 1,
        rengler: ['orange', 'black']
    },
    {
        id: 4,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Ribbed Tank',
        qiymet: 500,
        categories: 'denim',
        featured: false,
        bestSelling: true,
        availability: 1,
        brand: 'MH',
        size: ['s', 'l', 'm'],
        rengler: ['orange', 'black']
    },
    {
        id: 5,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Ribbed Tank Top',
        qiymet: 150,
        categories: 'fashion',
        featured: false,
        bestSelling: true,
        availability: 6,
        brand: 'ecomus',
        size: ['s', 'l'],
        rengler: ['orange', 'black', 'red']
    },
    {
        id: 6,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Ribbed Tank Top',
        qiymet: 1600,
        categories: 'men',
        featured: true,
        bestSelling: false,
        brand: 'ecomus',
        availability: 0,
        size: ['l'],
        rengler: ['orange', 'black', 'yellow']
    },
    {
        id: 7,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Ribbed Tank Top',
        qiymet: 2000,
        categories: 'dress',
        featured: true,
        bestSelling: false,
        availability: 3,
        brand: 'ecomus',
        size: ['s', 'l'],
        rengler: ['orange', 'black', 'red']
    },
    {
        id: 8,
        pic: './assets/images/./p-d9-1.webp',
        name: 'Ribbed',
        qiymet: 3,
        categories: 'dress',
        featured: true,
        bestSelling: false,
        availability: 0,
        brand: 'MH',
        size: ['s', 'l'],
        rengler: ['orange', 'black, blue']
    }
];

let mehsullarinOlculeri = '1/4'

//noqteye klik etdim -> mehsullarinOlculer deyiseninin deyerini deyisdi:
// mehsullarinOlculer = 'full'
// mehsullarinOlculer = '1/2'

document.querySelectorAll('button.btn.btn-dot').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            if (e.target.parentElement.tagName !== 'BUTTON') {
                const noqteSayi = Number(e.target.parentElement.parentElement.getAttribute('noqte-sayi'));
                if (noqteSayi === 1) {
                    mehsullarinOlculeri = 'full'
                } else if (noqteSayi === 2) {
                    mehsullarinOlculeri = `1/${noqteSayi}`
                }
                else if (noqteSayi === 3) {
                    mehsullarinOlculeri = `1/${noqteSayi}`

                } else if (noqteSayi === 4) {
                    mehsullarinOlculeri = `1/${noqteSayi}`

                } else if (noqteSayi === 5) {
                    mehsullarinOlculeri = `1/${noqteSayi}`

                } else {
                    mehsullarinOlculeri = `2/12`
                }
                imgSection(mehsullar)
            } else {
                const noqteSayi = Number(e.target.parentElement.getAttribute('noqte-sayi'));
                if (noqteSayi === 1) {
                    mehsullarinOlculeri = 'full'
                } else if (noqteSayi === 2) {
                    mehsullarinOlculeri = `1/${noqteSayi}`
                }
                else if (noqteSayi === 3) {
                    mehsullarinOlculeri = `1/${noqteSayi}`

                } else if (noqteSayi === 4) {
                    mehsullarinOlculeri = `1/${noqteSayi}`

                } else if (noqteSayi === 5) {
                    mehsullarinOlculeri = `1/${noqteSayi}`

                } else {
                    mehsullarinOlculeri = `2/12`
                }
                imgSection(mehsullar)
            }

        }
        else {
            const noqteSayi = Number(e.target.getAttribute('noqte-sayi'));
            if (noqteSayi === 1) {
                mehsullarinOlculeri = 'full'
            } else if (noqteSayi === 2) {
                mehsullarinOlculeri = `1/${noqteSayi}`
            }
            else if (noqteSayi === 3) {
                mehsullarinOlculeri = `1/${noqteSayi}`

            } else if (noqteSayi === 4) {
                mehsullarinOlculeri = `1/${noqteSayi}`

            } else if (noqteSayi === 5) {
                mehsullarinOlculeri = `1/${noqteSayi}`

            } else {
                mehsullarinOlculeri = `2/12`
            }
            imgSection(mehsullar)
        }



    })
})


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
companyDetails.social.forEach(item => {
    document.getElementById('social').innerHTML += ` 
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

footerMenu1.childs.forEach(item => {
    document.getElementById('help_menu').innerHTML += `<li class="mt-1 hover:text-red-700">
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
footerMenu2.childs.forEach(item => {
    document.getElementById('useful_links').innerHTML += ` 
   <li class="mt-1 hover:text-red-700">
                        <a href="${item.url}">${item.title}</a>
                       </li>`
})

const sortSelection = document.getElementById('sort_selection');
document.getElementById('sort_selection_btn').addEventListener('click', () => {
    sortSelection.classList.toggle('hidden');
})
const sort_optionslar = document.querySelectorAll('.sort-product');
sort_optionslar.forEach((li) => {
    li.addEventListener('click', (e) => {
        const klikOlunanYer = e.target;
        const cesid = klikOlunanYer.getAttribute('data-type');
        const istiqamet = klikOlunanYer.getAttribute('data-direction');
        if (cesid === 'featured') {
            const oneCixarilmisMehsullar = mehsullar.filter(item => item.featured);
            imgSection(oneCixarilmisMehsullar)
        }
        else if (cesid === 'best-selling') {
            const enCoxSatilanlar = mehsullar.filter(item => item.bestSelling);
            imgSection(enCoxSatilanlar)
        }
        else if (cesid === 'name') {
            if (istiqamet === 'az') {
                const adaz = mehsullar.sort((a, b) => a.name.localeCompare(b.name));
                imgSection(adaz);

            } else {
                const adza = mehsullar.sort((a, b) => b.name.localeCompare(a.name));
                imgSection(adza);
            }
        }
        else if (cesid === 'price') {
            if (istiqamet === 'lh') {

                const qiymet = mehsullar.sort((a, b) => a.qiymet - b.qiymet)
                imgSection(qiymet)
            } else if (cesid === 'price') {
                if (istiqamet === 'hl') {
                    const qiymet = mehsullar.sort((a, b) => b.qiymet - a.qiymet)
                    imgSection(qiymet)
                }
            }
        }
        else {
            if (cesid === 'date' && istiqamet === 'on') {

            } else {

            }

        }
        console.log(klikOlunanYer, cesid, istiqamet);
    })
})


const filterSection = document.getElementById('product_selection')
document.getElementById('filter_btn').addEventListener('click', () => {
    if (filterSection.className.includes('left-0') && filterSection.className.includes('flex')) {
        document.getElementById('filter-modal').classList.remove('flex');
        document.getElementById('filter-modal').classList.add('hidden');

        filterSection.classList.remove('left-0');
        filterSection.classList.add('-left-40')
    } else {
        document.getElementById('filter-modal').classList.add('flex');
        document.getElementById('filter-modal').classList.remove('hidden');
        filterSection.classList.add('left-0');
        filterSection.classList.remove('-left-40')
    }
});

const FilterModaliniBaglayanFunk = () =>{
    document.getElementById('filter-modal').classList.add('hidden');
        document.getElementById('filter-modal').classList.remove('flex');
        filterSection.classList.add('-left-40');
        filterSection.classList.remove('left-0');
}

    document.getElementById('filter-overlay').addEventListener('click', FilterModaliniBaglayanFunk)
const filter_options = document.querySelectorAll('.filter-item');
const filterOptions = {
    category: '',
    size: '',
    color: '',
    brand: '',
    minPrice: 0,
    maxPrice: 1000,
    stockAvailability: null
}
let filterOlunmusMehsullar = mehsullar;
filter_options.forEach((li) => {
    li.addEventListener('click', (e) => {
        FilterModaliniBaglayanFunk()
        const kliklenen = e.target;
        const cesid = kliklenen.getAttribute('filter-item');
        const secilen = kliklenen.getAttribute('data-type');
        switch (cesid) {
            case 'category':
                filterOptions.category = secilen;
                break;
            case 'size':
                filterOptions.size = secilen;
                break;
            case 'color':
                filterOptions.color = secilen;
                break;
            case 'brand':
                filterOptions.brand = secilen;
                break;
            case 'stock':
                filterOptions.stockAvailability = secilen === "true" ? true : false;
                break;
            default:
                break;

        }
        if (filterOptions.category.length > 0) {
            console.log('filterOptions category length boyukdur, isledi, evveli:', filterOlunmusMehsullar);
            filterOlunmusMehsullar = filterOlunmusMehsullar.filter(item => item.categories.toLowerCase() === secilen.toLowerCase())
            console.log('filterOptions category length boyukdur, isledi, sonrasi:', filterOlunmusMehsullar);
        }
        if (filterOptions.brand.length > 0) {
            console.log('filterOptions brand length boyukdur, isledi, evveli:', filterOlunmusMehsullar);
            filterOlunmusMehsullar = filterOlunmusMehsullar.filter(item => item.brand.toLowerCase() === filterOptions.brand.toLowerCase())
            console.log('filterOptions brand length boyukdur, isledi, sonrasi:', filterOlunmusMehsullar);
        }
        if (filterOptions.size.length > 0) {
            console.log('filterOptions size length boyukdur, isledi, evveli:', filterOlunmusMehsullar);
            filterOlunmusMehsullar = filterOlunmusMehsullar.filter(item => item.size.includes(filterOptions.size.toLowerCase()))
            console.log('filterOptions size length boyukdur, isledi, sonrasi:', filterOlunmusMehsullar);
        }
        if (filterOptions.color.length > 0) {
            console.log('filterOptions color length boyukdur, isledi, evveli:', filterOlunmusMehsullar);
            filterOlunmusMehsullar = filterOlunmusMehsullar.filter(item => item.rengler.includes(filterOptions.color.toLowerCase()))
            console.log('filterOptions color length boyukdur, isledi, sonrasi:', filterOlunmusMehsullar);
        }
        if (filterOptions.stockAvailability !== null && filterOptions.stockAvailability === true) {
            console.log('filterOptions stock true length boyukdur, isledi, evveli:', filterOlunmusMehsullar);
            filterOlunmusMehsullar = filterOlunmusMehsullar.filter(item => item.availability > 0)
            console.log('filterOptions stock true length boyukdur, isledi, sonrasi:', filterOlunmusMehsullar);
        }
        if (filterOptions.stockAvailability !== null && filterOptions.stockAvailability === false) {
            console.log('filterOptions stock false length boyukdur, isledi, evveli:', filterOlunmusMehsullar);
            filterOlunmusMehsullar = filterOlunmusMehsullar.filter(item => item.availability <= 0)
            console.log('filterOptions stock false length boyukdur, isledi, sonrasi:', filterOlunmusMehsullar);
        }
        console.log(filterOptions);

        console.log("filter edilmes mehsullar", filterOlunmusMehsullar);

        // if (secilen === 'fashion') {
        //     const fashionlar = mehsullar.filter(item => item.categories.toLowerCase() === 'fashion');
        //     imgSection(fashionlar)
        // } else if (secilen === 'men') {
        //     const menler = mehsullar.filter(item => item.categories.toLowerCase() === 'men');
        //     imgSection(menler)

        // }
        // else if (secilen === 'women') {
        //     const womenler = mehsullar.filter(item => item.categories.toLowerCase() === 'women');
        //     imgSection(womenler)

        // }
        // else if (secilen === 'denim') {
        //     const denimler = mehsullar.filter(item => item.categories.toLowerCase() === 'denim');
        //     imgSection(denimler)

        // } else if (secilen === 'out_of_stock') {
        //     const prod = mehsullar.filter(item => item.availability === 0);
        //     console.log(prod);

        //     imgSection(prod)
        // } else if (secilen === 'on_stock') {
        //     const prod = mehsullar.filter(item => item.availability > 0);
        //     console.log(prod);

        //     imgSection(prod)
        // }
        // else {
        //     const dressler = mehsullar.filter(item => item.categories);
        //     imgSection(dressler)

        // }

    })
})

const minPrice = document.getElementById('minPrice')
const maxPrice = document.getElementById('maxPrice')
minPrice.addEventListener('input', () => {
    filterOptions.minPrice = Number(minPrice.value);
    const qiymetFerqi = mehsullar.filter(item=>item.qiymet>=Number(minPrice.value) && item.qiymet<=Number(maxPrice.value));
    imgSection(qiymetFerqi);
})

maxPrice.addEventListener('input', () => {
    filterOptions.maxPrice = Number(maxPrice.value);
    const qiymetFerqi = mehsullar.filter(item=>item.qiymet>=Number(minPrice.value) && item.qiymet<=Number(maxPrice.value));
    imgSection(qiymetFerqi)
})


// const filter_availability = document.querySelectorAll('stock');
// filter_availability.forEach((li) => {
//     li.addEventListener('click', (e) => {
        
//         const kliklenen = e.target;
//         const secilen = kliklenen.getAttribute('data-type');
//         if (secilen === 'on_stock') {
//             const stokdaOlan = mehsullar.filter(item => item.availability);
//             imgSection(stokdaOlan)
//         } else {
//             const stokdaOlmayan = mehsullar.filter(item => item.availability);
//             imgSection(stokdaOlmayan)
//         }
//     })
// })

// const filter_brand = document.querySelectorAll('brand');
// filter_brand.forEach((li) => {
//     li.addEventListener('click', (e) => {
//         const kliklenen = e.target;
//         const secilen = kliklenen.getAttribute('data-type');
//         if (secilen === 'ecomus') {
//             const ecoOlan = mehsullar.filter(item => item.brand);
//             imgSection(ecoOlan)
//         } else {
//             const mhOlan = mehsullar.filter(item => item.brand);
//             imgSection(mhOlan)
//         }

//     })
// })

// const filterColor = document.querySelectorAll('color');
// filterColor.forEach((li) => {
//     li.addEventListener('click', (e) => {
//         const kliklenen = e.target;
//         const secilen = kliklenen.getAttribute('data-type');
//         if (secilen === 'orange') {
//             const orangeColor = mehsullar.filter(item => item.rengler);
//             imgSection(orangeColor)
//         } else if (secilen === 'black') {
//             const blackColor = mehsullar.filter(item => item.rengler);
//             imgSection(mhOlan)
//         } else if (secilen === 'blue') {
//             const blueColor = mehsullar.filter(item => item.rengler);
//             imgSection(blueColor)
//         } else if (secilen === 'red') {
//             const redColor = mehsullar.filter(item => item.rengler);
//             imgSection(redColor)
//         } else {
//             const yellowColor = mehsullar.filter(item => item.rengler);
//             imgSection(yellowColor)
//         }
//     })
// })

// const filterSize = document.querySelectorAll('size');
// filterSize.forEach((li) => {
//     li.addEventListener('click', (e) => {
//         const kliklenen = e.target;
//         const secilen = kliklenen.getAttribute('data-type');
//         if (secilen === 's') {
//             const sSize = mehsullar.filter(item => item.size);
//             imgSection(sSize)
//         }
//         else if (secilen === 'm') {
//             const mSize = mehsullar.filter(item => item.size);
//             imgSection(mSize)
//         }
//         else {
//             const lSize = mehsullar.filter(item => item.size);
//             imgSection(lSize)
//         }
//     })
// })






const imgSection = (arr) => {
    img.innerHTML = '';
    arr.forEach(item => {
        img.innerHTML += `
         <div class="w-${mehsullarinOlculeri} relative">
            <img class="w-72 rounded-lg" src="${item.pic}" alt="">
            <p class="mt-3">${item.name}</p>
            <h2 class="font-medium mt-2">${item.qiymet}</h2>
            <span>${item.availability > 0 ? `Stock: ${item.availability}` : 'Out of stock'}</span>
            <i class="fa-solid fa-circle text-${item.rengler[0]}-500 mt-2"></i>
            <i class="fa-solid fa-circle text-${item.rengler[1]} mt-2"></i>
        </div>`
    });
}
imgSection(mehsullar)