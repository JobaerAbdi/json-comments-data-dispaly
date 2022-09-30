function dataLoad(){
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => commentsData(data))
}

function commentsData(users){
    const dataContainer = document.getElementById('data-container')
    for(const user of users){
        const div = document.createElement('div');
        div.classList.add('style');
        div.innerHTML = `
            <h3>PostId : ${user.postId}</h3>
            <h3>Id : ${user.id}</h3>
            <h3>Name : ${user.name}</h3>
            <h3>Email : ${user.email}</h3>
            <h3>Body Details : ${user.body}</h3>
        `;
        dataContainer.appendChild(div);
    }
}

dataLoad();