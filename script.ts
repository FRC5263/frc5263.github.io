interface Data {
    toDo: string[],
    inProgress: string[],
    done: string[],
    ideas: string[]
}

async function getData() {
    let response = await fetch('https://api.keyvalue.xyz/74a033e0/resetrobotics', {
        method: "GET"
    });
    let json: Data = await response.json();
    return json;
}

async function postData(data: Data) {
    fetch('https://api.keyvalue.xyz/74a033e0/resetrobotics', {
        method: "POST",
        body: JSON.stringify(data)
    })
}

const toDo = document.getElementById('toDo')
const inProgress = document.getElementById('inProgress')
const done = document.getElementById('done')
const ideas = document.getElementById('ideas')

async function putData () {
    let data = await getData();
    toDo.innerHTML = '';
    inProgress.innerHTML = '';
    done.innerHTML = '';
    ideas.innerHTML = '';
    data.toDo.forEach((item, index) => {
        let div = document.createElement('div');
        div.innerHTML = item;
        div.classList.add('post')
        toDo.appendChild(div);
    })
    data.inProgress.forEach((item, index) => {
        let div = document.createElement('div');
        div.innerHTML = item;
        inProgress.appendChild(div);
        div.classList.add('post')
    })
    data.done.forEach((item, index) => {
        let div = document.createElement('div');
        div.innerHTML = item;
        div.classList.add('post')
        done.appendChild(div);
    })
    data.ideas.forEach((item, index) => {
        let div = document.createElement('div');
        div.innerHTML = item;
        div.classList.add('post')
        ideas.appendChild(div);
    })
}

let toDoButton = document.getElementById('toDoSubmit');
toDoButton.addEventListener('click', async (event) => {
    event.preventDefault();
    let value: HTMLTextAreaElement = document.getElementById('toDoInput') as any;
    let data = await getData();
    data.toDo.unshift(value.value)
    value.value = '';
    await postData(data);
    setTimeout(() => putData(), 500);
})

let inProgressButton = document.getElementById('inProgressSubmit');
inProgressButton.addEventListener('click', async (event) => {
    event.preventDefault();
    let value: HTMLTextAreaElement = document.getElementById('inProgressInput') as any;
    let data = await getData();
    data.inProgress.unshift(value.value)
    value.value = '';
    await postData(data);
    setTimeout(() => putData(), 500);
})

let doneButton = document.getElementById('doneSubmit');
doneButton.addEventListener('click', async (event) => {
    event.preventDefault();
    let value: HTMLTextAreaElement = document.getElementById('doneInput') as any;
    let data = await getData();
    data.done.unshift(value.value);
    value.value = '';
    await postData(data);
    setTimeout(() => putData(), 500);
})

let ideasButton = document.getElementById('ideasSubmit');
ideasButton.addEventListener('click', async (event) => {
    event.preventDefault();
    let value: HTMLTextAreaElement = document.getElementById('ideasInput') as any;
    let data = await getData();
    data.ideas.unshift(value.value)
    value.value = '';
    await postData(data);
    setTimeout(() => putData(), 500);
})

putData();