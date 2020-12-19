const d = document

const hamburger = d.getElementById('hamburger')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
})