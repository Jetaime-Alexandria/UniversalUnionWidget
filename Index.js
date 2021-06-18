function RefreshData() {
    let url = 'https://discord.com/api/guilds/811531936496746517/widget.json'

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (obj) {
       
        document
        .getElementById("nameParent")
        .innerHTML = ""
        
        const html = obj.members.map(users => {
            return `<li><img src="${users.avatar_url}"> ${users.username} <i class="fas fa-circle ${users.status}"></i></li>`
        })
        .join('')

        document
        .querySelector("#nameParent")
        .insertAdjacentHTML("afterbegin", html)
    })
    .catch(function (error) {
        console.error("Something went wrong.")
        console.error(error);
    })
}