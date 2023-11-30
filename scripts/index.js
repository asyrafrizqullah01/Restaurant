const fetchData = async () => {
    try {
        const response = await fetch('../public/data/DATA.json');
        const data = await response.json();
        return data.restaurants;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayRestaurants = async () => {
    const restaurantList = document.getElementById('restaurantList');
    const restaurants = await fetchData();

    restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement('div');
        restaurantElement.classList.add('restaurant');

        restaurantElement.innerHTML = `
            <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
            <p>Rating: ${restaurant.rating}</p>
            <h3>${restaurant.name}</h3>
            <p>Kota: ${restaurant.city}</p>
            <p>Deskripsi: ${restaurant.description}</p>
        `;

        restaurantList.appendChild(restaurantElement);
    });
};

displayRestaurants();

document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    });

    var mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    var navList = document.querySelector("nav ul");

    mobileMenuBtn.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});
