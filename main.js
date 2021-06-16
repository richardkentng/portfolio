//toggle mobile navbar
const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//****** clicking 'sun-lover' will light me up'
const sunLoverEl = document.querySelector('.sun-lover')
const profilePicEl = document.querySelector('.pp')

sunLoverEl.addEventListener('click', () => {
    profilePicEl.style.filter = 'brightness(1.5)'

    setTimeout(() => {
        profilePicEl.style.filter = 'brightness(1)'
    }, 3000)
})


//******** clicking link in navbar will color target text gold
const aboutLink = document.querySelector('a[href="#about"]')
const projectsLink = document.querySelector('a[href="#projects"]')
const resumeLink = document.querySelector('a[href="#resume"]')
const contactLink = document.querySelector('a[href="#contact"]')

const imStatement = document.querySelector('.im')
const projectsHeader = document.querySelector('.hprojects')
const resumeHeader = document.querySelector('.hresume')
const contactHeader = document.querySelector('.hcontact')

const pairs = [[aboutLink, imStatement], [projectsLink, projectsHeader], [resumeLink, resumeHeader], [contactLink, contactHeader]]

pairs.forEach(([link, header]) => {
    link.addEventListener('click', () => {
        //reset header colors to white-ish
        pairs.forEach(([link, header]) => header.style.color = '#bbb')
        //set target header color to gold
        header.style.color = 'gold'
        //if mobile navbar is being displayed, hide navbar-links
        if (navbarLinks.classList.contains('active')) {
            navbarLinks.classList.remove('active')
        }
    })
})