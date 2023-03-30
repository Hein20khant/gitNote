const btn = document.getElementById('theme');
let movebtn = document.getElementById('move');

btn.addEventListener('click', function onClick(event) {
    // 👇️ change background color
    const backgroundColor = document.querySelector('body').style.backgroundColor
    if (backgroundColor == "white") {
        document.querySelector('body').style.backgroundColor = "salmon"
    } else {
        document.querySelector('body').style.backgroundColor = "white"
    }
});
movebtn.addEventListener('click', function(event) {
    document.querySelector('h3').style.marginLeft = "20px"
})