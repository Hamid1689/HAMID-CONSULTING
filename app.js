document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#schedule-form");
    const confirmationPopup = document.querySelector("#confirmation-popup");
    const okButton = document.querySelector("#ok-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Показываем всплывающее окно
        confirmationPopup.style.display = "block";

        // Запускаем анимацию конфетти
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Очищаем форму
        form.reset();
    });

    okButton.addEventListener("click", function () {
        confirmationPopup.style.display = "none";
    });
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Explore page
const universities = [
    { 
        name: "Harvard University", 
        country: "USA", 
        specialties: ["Business", "Computer Science", "Engineering", "Medicine", "Law", "Arts"], 
        tuition: "$50K/year", 
        additionalInfo: "Harvard is one of the most prestigious universities in the world, known for its high academic standards and influential alumni." 
    },
    { 
        name: "MIT", 
        country: "USA", 
        specialties: ["Engineering", "Computer Science", "Science", "Mathematics"], 
        tuition: "$55K/year", 
        additionalInfo: "MIT is famous for its cutting-edge research and innovative teaching methods in the fields of engineering and technology." 
    },
    { 
        name: "Stanford University", 
        country: "USA", 
        specialties: ["Computer Science", "Business", "Engineering", "Law"], 
        tuition: "$52K/year", 
        additionalInfo: "Stanford has a reputation for being at the forefront of research and innovation, particularly in Silicon Valley." 
    },
    { 
        name: "Johns Hopkins University", 
        country: "USA", 
        specialties: ["Medicine", "Public Health", "Engineering", "Arts"], 
        tuition: "$60K/year", 
        additionalInfo: "Johns Hopkins is a world leader in research and healthcare, with a strong emphasis on public health." 
    },
    { 
        name: "Yale University", 
        country: "USA", 
        specialties: ["Law", "Arts", "Sciences", "Medicine"], 
        tuition: "$58K/year", 
        additionalInfo: "Yale is known for its strong programs in law, the humanities, and the social sciences." 
    },
    { 
        name: "University of Toronto", 
        country: "Canada", 
        specialties: ["Computer Science", "Engineering", "Business", "Medicine"], 
        tuition: "$30K/year", 
        additionalInfo: "The University of Toronto is Canada's leading research university, known for its global reputation in computer science and engineering." 
    },
    { 
        name: "McGill University", 
        country: "Canada", 
        specialties: ["Medicine", "Arts", "Science", "Engineering"], 
        tuition: "$35K/year", 
        additionalInfo: "McGill is a renowned research institution, offering world-class programs across various disciplines." 
    },
    { 
        name: "University of British Columbia", 
        country: "Canada", 
        specialties: ["Engineering", "Business", "Computer Science", "Science"], 
        tuition: "$32K/year", 
        additionalInfo: "UBC is consistently ranked as one of the top universities in Canada and is known for its vibrant academic community." 
    },
    { 
        name: "University of Alberta", 
        country: "Canada", 
        specialties: ["Science", "Engineering", "Medicine", "Arts"], 
        tuition: "$28K/year", 
        additionalInfo: "The University of Alberta is recognized for its contributions to research and education in the fields of science and medicine." 
    },
    { 
        name: "McMaster University", 
        country: "Canada", 
        specialties: ["Medicine", "Engineering", "Business", "Science"], 
        tuition: "$31K/year", 
        additionalInfo: "McMaster is renowned for its medical school and innovative research across various fields." 
    },
    { 
        name: "Oxford University", 
        country: "UK", 
        specialties: ["Medicine", "Law", "Arts", "Sciences"], 
        tuition: "$40K/year", 
        additionalInfo: "Oxford is one of the oldest and most prestigious universities in the world, with a rich history in academic excellence." 
    },
    { 
        name: "Cambridge University", 
        country: "UK", 
        specialties: ["Computer Science", "Engineering", "Mathematics", "Sciences"], 
        tuition: "$42K/year", 
        additionalInfo: "Cambridge is globally renowned for its research, particularly in the fields of science and engineering." 
    },
    { 
        name: "Imperial College London", 
        country: "UK", 
        specialties: ["Engineering", "Business", "Science", "Medicine"], 
        tuition: "$45K/year", 
        additionalInfo: "Imperial College London is a leading institution in the fields of engineering, business, and healthcare." 
    },
    { 
        name: "London School of Economics", 
        country: "UK", 
        specialties: ["Business", "Law", "Social Sciences"], 
        tuition: "$43K/year", 
        additionalInfo: "LSE is one of the top social science universities, known for its contributions to economics and politics." 
    },
    { 
        name: "University College London", 
        country: "UK", 
        specialties: ["Arts", "Sciences", "Engineering", "Medicine"], 
        tuition: "$41K/year", 
        additionalInfo: "UCL is a prestigious global university with a focus on interdisciplinary research and academic excellence." 
    },
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
            <button class="btn more-info-btn">More Info</button>
            <div class="more-info" style="display: none;">
                <p><strong>Additional Information:</strong> ${university.additionalInfo}</p>
            </div>
        `;

        // Обработчик клика на кнопку "More Info"
        const moreInfoBtn = universityDiv.querySelector(".more-info-btn");
        const moreInfoDiv = universityDiv.querySelector(".more-info");

        moreInfoBtn.addEventListener("click", () => {
            // Переключаем отображение дополнительной информации
            moreInfoDiv.style.display = moreInfoDiv.style.display === "none" ? "block" : "none";
        });

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
