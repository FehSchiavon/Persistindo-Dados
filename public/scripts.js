const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href")) ) {
        item.classList.add('active')
    }
}

// Paginação

let totalPage = 20,
    selectedPage = 15.
    pages = []

for(let currentPage = 0; currentPage < totalPage; currentPage++) {
    
}