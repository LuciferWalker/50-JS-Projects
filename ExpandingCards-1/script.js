const rows= document.querySelectorAll('.row')

rows.forEach(row => {
    row.addEventListener('click', () => {
        removeActive()
        row.classList.add('active')
    })
})

function removeActive(){
    rows.forEach(row => {
        row.classList.remove('active')
    })
}