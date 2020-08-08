const trigger = document.getElementById('trigger')
const banner = document.getElementById('banner')

trigger.addEventListener('click',() => {
    banner.style.display === "flex"?banner.style.display = "none":banner.style.display = "flex"

})