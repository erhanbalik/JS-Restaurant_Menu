// Menu Items 
const menu = [
    {
        id:1,
        title: "Breakfast wrap with chees",
        category:"breakfast",
        price: "$15.90",
        img: "./images/img-2.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:2,
        title: "Meal with Beef",
        category:"lunch",
        price: "$15.90",
        img: "./images/img-3.jpg",
        desc: "Beef roasted with grill"
    },
    {
        id:3,
        title: "Breakfast wrap with chees",
        category:"dinner",
        price: "$25.90",
        img: "./images/img-4.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:4,
        title: "Burrito",
        category:"lunch",
        price: "$15.90",
        img: "./images/img-5.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:5,
        title: "Pasta with Mozeralla",
        category:"dinner",
        price: "$10",
        img: "./images/img-7.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:6,
        title: "Egg and Tea",
        category:"breakfast",
        price: "$20",
        img: "./images/img-1.jpg",
        desc: `Perfect wrap with chees`,
    },
    {
        id:7,
        title: "Pasta with Mozeralla",
        category:"dinner",
        price: "$10",
        img: "./images/img-2.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:8,
        title: "Pasta with Mozeralla",
        category:"dinner",
        price: "$10",
        img: "./images/img-4.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:9,
        title: "Tiramisu",
        category:"dessert",
        price: "$5",
        img: "./images/img-7.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:10,
        title: "Cheescake",
        category:"dessert",
        price: "$8",
        img: "./images/img-2.jpg",
        desc: "Cheescake with strawberry"
    }
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


//Load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu); // Items function

    displayMenuButtons(); // Buttons function
});


function displayMenuItems (menuItems){
    let displayMenu = menuItems.map(function(item){
        
        return `<article class="menu-item">
        <img src=${item.img} class= "menu-img" alt=${item.title}>
        <div class="menu-info">
            <header class="info">
                <h4>${item.title}</h4>
                <h5 class="price">${item.price}</h5>
            </header>
            <p class="menu-text">${item.desc}</p>
        </div>
    </article>`;
    })
    displayMenu = displayMenu.join("");
    
    sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons (){
    const categories = menu.reduce(function(value,item){
        if (!value.includes(item.category)){
            value.push(item.category);
        }
        return value;
    }, ['all']);

    const categoryBtns = categories.map(function(category){
        return `<button class="btn-filter" type="button" data-id=${category}>${category}</button>`
    }).join("");

    btnContainer.innerHTML = categoryBtns; // Add Buttons to page.

    // After Buttons Added page then call buttons function
    const filterBtns = document.querySelectorAll(".btn-filter");
    
    //Filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if (menuItem.category === category){
                    return menuItem;
                }
            })
            if (category === 'all') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}