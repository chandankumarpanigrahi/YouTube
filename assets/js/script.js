// Dark Mode Toggle
const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const logoImage = document.getElementById('logoImage');

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    const currentSrc = logoImage.getAttribute('src');
    const darkLogoSrc = './assets/images/logo_dark.png';
    const lightLogoSrc = './assets/images/logo_light.png';
    
    if (currentSrc === darkLogoSrc) {
        logoImage.setAttribute('src', lightLogoSrc);
    } else {
        logoImage.setAttribute('src', darkLogoSrc);
    }
});