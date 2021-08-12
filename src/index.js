const Homepage = (
    function (){
        const contentArea = document.querySelector('#content');

        const generateNav = () => {
            let nav = document.createElement('nav');
            contentArea.appendChild(nav);
            
            let navbar = document.createElement('div');
            nav.appendChild(navbar);
            navbar.classList.add('navbar');

            let title = document.createElement('h1');
            title.innerText = 'Musico';
            navbar.appendChild(title);

            let ulist = document.createElement('ul');
            navbar.appendChild(ulist);

            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'navbar-item home active');
            let itemLink = document.createElement('a');
            listItem.appendChild(itemLink);
            itemLink.setAttribute('href', '#');
            itemLink.innerText = 'Home';
            ulist.appendChild(listItem);

            listItem = document.createElement('li');
            listItem.setAttribute('class', 'navbar-item menu');
            itemLink = document.createElement('a');
            listItem.appendChild(itemLink);
            itemLink.setAttribute('href', '#');
            itemLink.innerText = 'Menu';
            ulist.appendChild(listItem);

            listItem = document.createElement('li');
            listItem.setAttribute('class', 'navbar-item contact');
            itemLink = document.createElement('a');
            listItem.appendChild(itemLink);
            itemLink.setAttribute('href', '#');
            itemLink.innerText = 'Contact';
            ulist.appendChild(listItem);
        };

        const generateHomeFeature = () => {
            let feature = document.createElement('div');
            contentArea.appendChild(feature);
            feature.classList.add('feature');

            let left = document.createElement('div');
            feature.appendChild(left);
            left.classList.add('left');
            let img = document.createElement('img');
            left.appendChild(img);
            img.setAttribute('src', './media/musico.jpeg');
            img.setAttribute('alt', 'musico');

            let right = document.createElement('div');
            feature.appendChild(right);
            right.classList.add('right');
            let para = document.createElement('p');
            right.appendChild(para);
            para.innerText = 'Welcome to Musico where we serve the best foods complemented by the best music.';
        };

        const generateFooter = () => {
            let footer = document.createElement('footer');
            contentArea.appendChild(footer);
            footer.innerHTML = 'All Rights Reserved &copy; Musico';
        };

        const generate = () => {
            contentArea.innerHTML = '';
            generateNav();
            generateHomeFeature();
            generateFooter();
            document.querySelector('.home').addEventListener('click', Homepage.generate);
            document.querySelector('.menu').addEventListener('click', Menupage.generate);
            document.querySelector('.contact').addEventListener('click', Contactpage.generate);
        };

        return {
            generate,
            generateFooter,
            generateNav
        };
    }
)();

const Menupage = (
    function () {
        const contentArea = document.querySelector('#content');

        const menuItems = {
            cappuccino : {
                title: 'Cappuccino',
                img: './media/cappuccino.jpg',
                description: 'A hot warm goodness of single shot espresso, steamed milk and foamed milk!'
            },
            cake : {
                title: 'Strawberry Cake',
                img: './media/cake.jpg',
                description: 'Fluffy and creamy cake fill with delicious strawberry, what more could you ask for?'
            },
            veganDelight : {
                title: 'Vegan Delight',
                img: './media/veganDelight.jpg',
                description: 'Vegan biscuit topped with avocado and a bunch of grass, yum!'
            },
        };

        const createMenuItem = (foodTitle, imgPath, descriptionText) => {
            let item = document.createElement('div');
            item.classList.add('menu-item');
            let title = document.createElement('h3');
            item.appendChild(title);
            title.innerText = foodTitle;
            let img = document.createElement('img');
            item.appendChild(img);
            img.setAttribute('src', imgPath);
            let description  = document.createElement('p');
            item.appendChild(description);
            description.innerText = descriptionText;

            return item;
        };

        const generateMenu = () => {
            for (const item in menuItems) {
                console.log(menuItems[item].title, menuItems[item].img, menuItems[item].description);
                contentArea.appendChild(createMenuItem(menuItems[item].title, menuItems[item].img, menuItems[item].description));
            }
        };

        const generateNav = () => {
            Homepage.generateNav();
            document.querySelector('.home').classList.remove('active');
            document.querySelector('.menu').classList.add('active');
        };

        const generate = () => {
            contentArea.innerHTML = '';
            generateNav();
            generateMenu();
            Homepage.generateFooter();
            document.querySelector('.home').addEventListener('click', Homepage.generate);
            document.querySelector('.menu').addEventListener('click', Menupage.generate);
            document.querySelector('.contact').addEventListener('click', Contactpage.generate);
        };

        return {generate};
    }
)();

const Contactpage = (
    function () {
        const contentArea = document.querySelector('#content');

        const generateNav = () => {
            Homepage.generateNav();
            document.querySelector('.home').classList.remove('active');
            document.querySelector('.contact').classList.add('active');
        };

        const generateContact = () => {
            contactDiv = document.createElement('div');
            contentArea.appendChild(contactDiv);
            contactDiv.classList.add('contact-body');

            let header1 = document.createElement('h2');
            contactDiv.appendChild(header1);
            header1.innerText = '📞 Phone Us At';
            header1.classList.add('phone-title');
            let phoneNum = document.createElement('p');
            contactDiv.appendChild(phoneNum);
            phoneNum.innerText = '+65 8123 4567'
            phoneNum.classList.add('phone-description');

            let header2 = document.createElement('h2');
            contactDiv.appendChild(header2);
            header2.innerText = '📍 Our Location';
            header2.classList.add('address-title');
            let address = document.createElement('p');
            contactDiv.appendChild(address);
            address.innerText = '101 Orchard Rd, #10-k25, Singapore 238982'
            address.classList.add('address-description');
        };

        const generate = () => {
            contentArea.innerHTML = '';
            generateNav();
            generateContact()
            Homepage.generateFooter();
            document.querySelector('.home').addEventListener('click', Homepage.generate);
            document.querySelector('.menu').addEventListener('click', Menupage.generate);
            document.querySelector('.contact').addEventListener('click', Contactpage.generate);
        };

        return {generate};
    }
)();

Homepage.generate();
