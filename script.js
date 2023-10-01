// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];

// inserting css file into html
let linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'styles.css'; 
document.head.appendChild(linkElement);

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach(link => { 
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// 5.2
topMenuEl.addEventListener('click', (event => {
    event.preventDefault();
    const link = event.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);

    // 5.3
    if (link.classList.contains('active')) {
        link.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }

    // 5.4
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 5.5
    link.classList.add('active');

    // 5.6

    const linkData = menuLinks.find(linkObj => linkObj.text === link.textContent);
    showingSubMenu = 'subLinks' in linkData;

    // const linkData = menuLinks.find(linkObj => {
    //     return linkObj.text === link.textContent;
    // });
    // showingSubMenu = 'subLinks' in linkData;

    // 5.7
    if (showingSubMenu === true) {
        buildSubMenu(linkData.subLinks) 
        subMenuEl.style.top = '100%';
        } else {
            subMenuEl.style.top = '0';
            mainEl.innerHTML = '<h1>about</h1>';
        }

    // 5.8
    function buildSubMenu(subLinks) {
        subMenuEl.innerHTML = ' ';
        subLinks.forEach(link => { 
            const linkEl = document.createElement('a');
            linkEl.setAttribute('href', link.href);
            linkEl.textContent = link.text;
            subMenuEl.appendChild(linkEl);
        });
    } 
}))

// 6.0
subMenuEl.addEventListener('click', (event => {
    event.preventDefault();
    const subLink = event.target;
    if (subLink.tagName !== 'A') return;
    console.log(subLink.textContent);

    // 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';

    // 6.2
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 6.3
    mainEl.innerHTML = `<h1>${subLink.textContent}</h1>`;
}))