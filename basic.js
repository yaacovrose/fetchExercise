
window.addEventListener('load', () => {
    // 1
    // const showUser = document.querySelector('#first');
    // showUser.addEventListener('click', async () => {
    //     getUser()
    // })

    // async function getUser() {
    //     const response = await fetch('https://randomuser.me/api');
    //     const obj = await response.json();
    //     return createUser(obj)
    // }


    // function createUser(user) {
    //     const name = `name: ${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`
    //     const email = `Email: ${user.results[0].email}`
    //     const picture = `${user.results[0].picture.large}`;
    //     const age = `age: ${user.results[0].dob.age}`
    //     const details = `${name} \n ${email} \n ${age}`
    //     console.log(details)
    //     return pushData(details, picture);
    // }

    // function pushData(details, picture) {
    //     const user = document.querySelector('.user');
    //     const detail = document.createElement('p');
    //     const pictures = document.createElement('img');
    //     detail.innerText = details;
    //     pictures.src = picture
    //     user.appendChild(detail);
    //     user.appendChild(pictures)
    // }


    // 2
    // const show5User = document.querySelector('#second');
    // show5User.addEventListener('click', async () => {
    //     get5User()
    // })

    // async function get5User() {
    //     const response = await fetch('https://randomuser.me/api?results=5&gender=male');
    //     const obj = await (response.json());
    //     const maleUsers = obj.results
    //     return createUser(maleUsers)
    // }


    // function createUser(users) {
    //     users.forEach(user => {
    //         const name = `name: ${user.name.title} ${user.name.first} ${user.name.last}`
    //         const email = `Email: ${user.email}`
    //         const picture = `${user.picture.thumbnail}`;
    //         const age = `age: ${user.dob.age}`
    //         const details = `${name} \n ${email} \n ${age}`
    //         console.log(details)
    //         pushData(details, picture);
    //     });
    // }

    // function pushData(details, picture) {
    //     const fiveUser = document.querySelector('#fiveUsers');
    //     const detail = document.createElement('p');
    //     const pictures = document.createElement('img');

    //     detail.innerText = details;
    //     pictures.src = picture
    //     fiveUser.appendChild(detail);
    //     fiveUser.appendChild(pictures)
    // }


    // 3
    // const joke = document.querySelector('#joke')
    // joke.addEventListener('click', () => getJoke())


    // async function getJoke(){
    //     const response = await fetch('https://api.humorapi.com/jokes/search?api-key=0d3940d548374fbaaeeb24946fcb14cc');
    //     const obj = await response.json();
    //     const current = obj.jokes
    //     showJoke(current)
    // }

    // function showJoke(data){
    //     const divJoke = document.querySelector('#jokes')
    //     const textJoke = document.createElement('p')
    //     textJoke.textContent = data[0].joke
    //     divJoke.appendChild(textJoke)
    // }

    // 4
    const displayPro = document.querySelector('#displayPro')
    displayPro.addEventListener('click', () => products())

    async function products(){
        const response = await fetch('https://fakestoreapi.com/products')
        const prod = await response.json()
        showProduct(prod)
    }

    function showProduct(prod){
        prod.forEach(element => {
            const title = element.title
            showPro(title)
        });
    }

    function showPro(data){
        const list = document.querySelector('#listPro');
        const textPro = document.createElement('li')
        textPro.textContent = data
        list.appendChild(textPro)
    }
})
