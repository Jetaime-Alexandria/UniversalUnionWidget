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
            return `<li><img src="${users.avatar_url}"> ${users.username} <i class="fas fa-circle ${users.status}"></i> - <i class="fas fa-gamepad"></i> Playing ${users.game?.name}</li>`
        })
        .join('')
        .replaceAll('- <i class="fas fa-gamepad"></i> Playing undefined', '')
        .replace('Sir. Sebastian', `Sir. Sebastian <span class="badge bg-primary">Bot</span>`)
        .replace('SeC Jetaime Alexandria', `SeC Jetaime Alexandria <span class="badge bg-primary">Widget Creator</span>`)

        document
        .querySelector("#nameParent")
        .insertAdjacentHTML("afterbegin", html)
    })
    .catch(function (error) {              
        document
        .getElementById('alertcontainer');
        document
        .querySelector("#alertcontainer")
        .insertAdjacentHTML("afterbegin", `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>A problem occurred.</strong><br>${error}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `)
    })
}