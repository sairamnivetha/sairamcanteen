document.addEventListener('DOMContentLoaded', () => {
    const todayMenuContainer = document.getElementById('todayMenu');
    const thursdayMenuContainer = document.getElementById('thursdayMenu');
    const datetime = document.getElementById('datetime');
    const getDirectionsButton = document.getElementById('getDirections');

    // Function to display the current date and time
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        datetime.textContent = now.toLocaleDateString(undefined, options) + ' ' + now.toLocaleTimeString();
    }

    // Update date and time every second
    setInterval(updateDateTime, 1000);

    const regularMenu = [
        { name: 'Chicken Noodles', price: 85, image: 'chicken_noodles.jpeg' }, // Use your own image path
        { name: 'Egg Noodles', price: 75, image: 'egg_noodles.jpeg' }, // Add your image path
        { name: 'Biriyani', price: 110, image: 'biriyani.jpeg' }, // Add your image path
        { name: 'Chappathi', price: 45, image: 'chappathi.jpeg' }, // Add your image path
        { name: 'Chicken Rice', price: 85, image: 'chicken_rice.jpeg' }, // Add your image path
        { name: 'Egg Rice', price: 75, image: 'egg_rice.jpeg' }, // Add your image path
        { name: 'Shawarma', price: 60, image: 'shawarma.jpeg' } // Add your image path
    ];

    const thursdayMenu = [
        { name: 'Paneer Fried Rice', price: 75, image: 'paneer_fried_rice.jpeg' }, // Add your image path
        { name: 'Veg Fried Rice', price: 70, image: 'veg_fried_rice.jpeg' }, // Add your image path
        { name: 'Paneer Noodles', price: 75, image: 'paneer_noodles.jpeg' }, // Add your image path
        { name: 'Veg Noodles', price: 70, image: 'veg_noodles.jpeg' }, // Add your image path
        { name: 'Veg Biriyani', price: 70, image: 'veg_biriyani.jpeg' }, // Add your image path
        { name: 'Chappathi', price: 45, image: 'chappathi.jpeg' }, // Add your image path
        { name: 'Sambar Rice with Appalam', price: 50, image: 'sambar_rice_with_appalam.jpeg' } // Add your image path
    ];

    const today = new Date().getDay();
    const isThursday = today === 4;

    const displayMenu = (menu, container) => {
        menu.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.innerHTML = `
                <img src="${food.image}" alt="${food.name}">
                <div class="food-item-content">
                    <h3>${food.name}</h3>
                    <p>Rs. ${food.price}</p>
                </div>
            `;
            container.appendChild(foodItem);
        });
    };

    if (isThursday) {
        displayMenu(thursdayMenu, todayMenuContainer);
    } else {
        displayMenu(regularMenu, todayMenuContainer);
    }

    displayMenu(thursdayMenu, thursdayMenuContainer);

    getDirectionsButton.addEventListener('click', () => {
        window.open('https://www.google.com/maps/dir/?api=1&destination=Sri+Sairam+Engineering+College+canteen', '_blank');
    });
});
