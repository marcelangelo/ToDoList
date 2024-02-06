const inputBox = document.getElementById('input-box');
const listContanier = document.getElementById('list-container');


const addTask = () =>{
    if(inputBox.value === ''){
        if(confirm('No text entered! SDP?')){
            alert('Shutting down pc!');
        }
        else{
            alert('Enter text!');
        }
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContanier.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContanier.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () =>{
    localStorage.setItem('data', listContanier.innerHTML);
}

const showTask = () =>{
    listContanier.innerHTML = localStorage.getItem('data');
}

showTask();