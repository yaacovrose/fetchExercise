
// const send = document.querySelector('form')
// form = ('click', () => addUser())

function addUser() {
    const fName = document.querySelector('#first').value
    const lName = document.querySelector('#last').value
    const email = document.querySelector('#email').value
    const age = document.querySelector('#age').value

    const reqOptions = {
        method: 'post',
        body: JSON.stringify({ fName, lName, email, age }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    form(reqOptions)
}

async function form(reqOptions) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', reqOptions);
        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.error('Error:', error);
    }
}
