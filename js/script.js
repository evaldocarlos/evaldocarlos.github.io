let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


let currentIndex = 0;

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].clientWidth + 20; // 20 is the margin between items

    // Calculate the new index
    currentIndex += direction;

    // Ensure the index is within bounds
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    // Scroll the carousel
    carousel.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const readMoreButton = document.querySelector('.read-more-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const serviceItem = this.parentElement.querySelector('p').textContent;
            cart.push(serviceItem);
            alert(`Added to cart: ${serviceItem}`);
            console.log(cart);
        });
    });

    readMoreButton.addEventListener('click', function () {
        const moreServices = `
                <div class="service-item">
                <p>Moisturising lip brush</p>
                <button class="add-to-cart">+</button>
            </div>
            <div class="service-item">
                <p>Dermaplaning skin treatment</p>
                <button class="add-to-cart">+</button>
            </div>
            <div class="service-item">
                <p>Skin repair after laser tattoo removal</p>
                <button class="add-to-cart">+</button>
            </div>
            <div class="service-item">
                <p>Plasma for wart removal</p>
                <button class="add-to-cart">+</button>
            </div>
            <div class="service-item">
                <p>Rejuvenation treatment</p>
                <button class="add-to-cart">+</button>
            </div>
            <div class="service-category">
                <h2>WAXING</h2>
                <div class="service-item">
                    <p>Plasma for wart removal</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Brazilian waxing</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Underarms</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Lip lift</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Facials</p>
                    <button class="add-to-cart">+</button>
                </div>
            </div>
            <div class="service-category">
                <h2>MAN EYEBROW AND TREATMENT</h2>
                <div class="service-item">
                    <p>Skin care clean and treatment</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Scalp micropigmentation</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Eyebrows threading</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Blush lips effect</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Laser tattoo removal</p>
                    <button class="add-to-cart">+</button>
                </div>
                <div class="service-item">
                    <p>Melasma treatment</p>
                    <button class="add-to-cart">+</button>
                </div>
            </div>
        `;
        const container = document.querySelector('.services-container');
        container.insertAdjacentHTML('beforeend', moreServices);
        this.style.display = 'none'; // Hide the "Read More" button after clicking

        // Re-attach event listeners for new items
        const newAddToCartButtons = document.querySelectorAll('.add-to-cart');
        newAddToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const serviceItem = this.parentElement.querySelector('p').textContent;
                cart.push(serviceItem);
                alert(`Added to cart: ${serviceItem}`);
                console.log(cart);
            });
        });
    });
});



