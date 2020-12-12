const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href")) ) {
        item.classList.add('active')
    }
}

// Paginação

let totalPages = 20,
    selectedPage = 15.
    pages = [],
    oldPage

for(let currentPage = 1; currentPage <= totalPages; currentPage++) {
    pages.push(currentPage)

    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

    if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
        
        if (oldPage && currentPage - oldPage > 2) {
            pages.push("...")
        }

        pages.push(currentPage)
        
        oldPage = currentPage
    }
}

console.log(pages)