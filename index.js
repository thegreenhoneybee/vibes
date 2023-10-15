let pages = document.querySelectorAll(".page")
pages.forEach((e, i) => {if (i > 1) {e.style.display = "none"}})
pages.forEach(e => e.onclick = handleClick)

function handleClick(evt) {
    console.log(evt)
}