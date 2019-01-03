var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('https://api.keyvalue.xyz/74a033e0/resetrobotics', {
            method: "GET"
        });
        let json = yield response.json();
        return json;
    });
}
function postData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch('https://api.keyvalue.xyz/74a033e0/resetrobotics', {
            method: "POST",
            body: JSON.stringify(data)
        });
    });
}
const toDo = document.getElementById('toDo');
const inProgress = document.getElementById('inProgress');
const done = document.getElementById('done');
const ideas = document.getElementById('ideas');
function putData() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield getData();
        toDo.innerHTML = '';
        inProgress.innerHTML = '';
        done.innerHTML = '';
        ideas.innerHTML = '';
        data.toDo.forEach((item, index) => {
            let div = document.createElement('div');
            div.innerHTML = item;
            div.classList.add('post');
            toDo.appendChild(div);
        });
        data.inProgress.forEach((item, index) => {
            let div = document.createElement('div');
            div.innerHTML = item;
            inProgress.appendChild(div);
            div.classList.add('post');
        });
        data.done.forEach((item, index) => {
            let div = document.createElement('div');
            div.innerHTML = item;
            div.classList.add('post');
            done.appendChild(div);
        });
        data.ideas.forEach((item, index) => {
            let div = document.createElement('div');
            div.innerHTML = item;
            div.classList.add('post');
            ideas.appendChild(div);
        });
    });
}
let toDoButton = document.getElementById('toDoSubmit');
toDoButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    let value = document.getElementById('toDoInput');
    let data = yield getData();
    data.toDo.unshift(value.value);
    value.value = '';
    yield postData(data);
    setTimeout(() => putData(), 500);
}));
let inProgressButton = document.getElementById('inProgressSubmit');
inProgressButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    let value = document.getElementById('inProgressInput');
    let data = yield getData();
    data.inProgress.unshift(value.value);
    value.value = '';
    yield postData(data);
    setTimeout(() => putData(), 500);
}));
let doneButton = document.getElementById('doneSubmit');
doneButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    let value = document.getElementById('doneInput');
    let data = yield getData();
    data.done.unshift(value.value);
    value.value = '';
    yield postData(data);
    setTimeout(() => putData(), 500);
}));
let ideasButton = document.getElementById('ideasSubmit');
ideasButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    let value = document.getElementById('ideasInput');
    let data = yield getData();
    data.ideas.unshift(value.value);
    value.value = '';
    yield postData(data);
    setTimeout(() => putData(), 500);
}));
putData();
//# sourceMappingURL=script.js.map