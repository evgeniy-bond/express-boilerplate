let moreBtn = document.getElementById('add-news');

moreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let form = new FormData(document.getElementById('form'));

    fetch(`/newpost`, { method: "POST", body: form })
        .catch(err => console.log(err));
})