const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show Active Menu When Scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    
    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');    
        aboutMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight'); 
       
        return
    }    
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }

    
} 

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking to a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

                                  // Explore page
 
const universities = [
    { name: "Harvard University", country: "USA", specialties: ["Business", "Computer Science", "Engineering", "Medicine", "Law", "Arts"], tuition: "$50K/year" },
    { name: "MIT", country: "USA", specialties: ["Engineering", "Computer Science", "Science", "Mathematics"], tuition: "$55K/year" },
    { name: "Stanford University", country: "USA", specialties: ["Computer Science", "Business", "Engineering", "Law"], tuition: "$52K/year" },
    { name: "Johns Hopkins University", country: "USA", specialties: ["Medicine", "Public Health", "Engineering", "Arts"], tuition: "$60K/year" },
    { name: "Yale University", country: "USA", specialties: ["Law", "Arts", "Sciences", "Medicine"], tuition: "$58K/year" },
    { name: "University of Toronto", country: "Canada", specialties: ["Computer Science", "Engineering", "Business", "Medicine"], tuition: "$30K/year" },
    { name: "McGill University", country: "Canada", specialties: ["Medicine", "Arts", "Science", "Engineering"], tuition: "$35K/year" },
    { name: "University of British Columbia", country: "Canada", specialties: ["Engineering", "Business", "Computer Science", "Science"], tuition: "$32K/year" },
    { name: "University of Alberta", country: "Canada", specialties: ["Science", "Engineering", "Medicine", "Arts"], tuition: "$28K/year" },
    { name: "McMaster University", country: "Canada", specialties: ["Medicine", "Engineering", "Business", "Science"], tuition: "$31K/year" },
    { name: "Oxford University", country: "UK", specialties: ["Medicine", "Law", "Arts", "Sciences"], tuition: "$40K/year" },
    { name: "Cambridge University", country: "UK", specialties: ["Computer Science", "Engineering", "Mathematics", "Sciences"], tuition: "$42K/year" },
    { name: "Imperial College London", country: "UK", specialties: ["Engineering", "Business", "Science", "Medicine"], tuition: "$45K/year" },
    { name: "London School of Economics", country: "UK", specialties: ["Business", "Law", "Social Sciences"], tuition: "$43K/year" },
    { name: "University College London", country: "UK", specialties: ["Arts", "Sciences", "Engineering", "Medicine"], tuition: "$41K/year" },
    // Add even more universities here!
];

const universitiesList = document.getElementById("universities-list");
const countryFilter = document.getElementById("countryFilter");

function displayUniversities(universities) {
    universitiesList.innerHTML = ""; // Clear existing list

    universities.forEach(university => {
        const universityDiv = document.createElement("div");
        universityDiv.classList.add("university");
        universityDiv.dataset.country = university.country;
        universityDiv.dataset.specialties = university.specialties.join(","); // Store specialties as a comma-separated string

        universityDiv.innerHTML = `
            <h2>${university.name}</h2>
            <p>Location: ${university.country} | Specialties: ${university.specialties.join(", ")} | ${university.tuition}</p>
            <a href="#!" class="btn">More Info</a>
        `;

        universitiesList.appendChild(universityDiv);
    });
}

function filterUniversities() {
    const selectedCountry = countryFilter.value;

    const filteredUniversities = universities.filter(university => {
        const countryMatch = selectedCountry === "" || university.country === selectedCountry;
        return countryMatch;
    });

    displayUniversities(filteredUniversities);
}

displayUniversities(universities); // Initial display