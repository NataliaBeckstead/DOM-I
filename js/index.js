const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//navigation
let menu = document.querySelectorAll('header nav a');
for (let i = 0; i < menu.length; i++) {
   menu[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}


//section class "cta"
const cta = document.querySelector('.cta');

const h1 = cta.querySelector('h1')
h1.textContent = siteContent.cta.h1;

const button = cta.querySelector('button');
button.textContent = siteContent.cta.button;

const ctaIMG = cta.querySelector('#cta-img');
ctaIMG.src = siteContent.cta["img-src"];

//section class "main-content"
const mainContent = document.querySelector('.main-content');

const h4sOfMain = mainContent.querySelectorAll('h4');
const pOfMain = mainContent.querySelectorAll('p');
const topics = ['features', 'about', 'services', 'product', 'vision'];

for (let i=0; i < h4sOfMain.length; i++) {
  h4sOfMain[i].textContent = siteContent['main-content'][`${topics[i]}-h4`];
  pOfMain[i].textContent = siteContent['main-content'][`${topics[i]}-content`];
}

const mainImg = mainContent.querySelector('img');
mainImg.src = siteContent["main-content"]["middle-img-src"];

//section class "contact"
const contact = document.querySelector('.contact').children;
let contactLines = ["contact-h4", "address", "phone", "email"];

for (let i=0; i < contactLines.length; i++) {
  contact[i].textContent = siteContent['contact'][contactLines[i]];
}

//footer
const footer = document.querySelector('footer > p');
footer.textContent = siteContent['footer']['copyright'];


