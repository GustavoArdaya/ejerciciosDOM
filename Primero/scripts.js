let listaCompra = [];
let $itemCompra = document.getElementById("inputLista");
let listaDOM = document.getElementById("listaDOM");

render();

function addItemToList() {
    listaCompra.push($itemCompra.value);
    $itemCompra.value = '';
    render();
    }

function deleteItem(itemToDelete) {
    listaCompra.splice(itemToDelete, 1);
    render();
}

function modifyItem(itemToModify) {
    id = document.getElementById(`editarItem${itemToModify}`);
    listaCompra[itemToModify] = id.value;
    render();
}

function showEdit(index) {
    input = document.getElementById(`editarItem${index}`);
    botonEdit = document.getElementById(`buttonEdit${index}`);
    botonChange = document.getElementById(`buttonChange${index}`);
    input.style = "";
    botonEdit.style = "display:none";
    botonChange.style = "";
    
}

function render() {
let template = "";
for (const item of listaCompra) {
    template += `<li class="listClass">${item}<button onclick="deleteItem(${listaCompra.indexOf(item)})">-
    </button><input style="display:none" id="editarItem${listaCompra.indexOf(item)}" type="text" value="${item}">
    <button style="" id="buttonEdit${listaCompra.indexOf(item)}" onclick="showEdit(${listaCompra.indexOf(item)})">editar</button>
    <button style="display:none" id="buttonChange${listaCompra.indexOf(item)}" onclick="modifyItem(${listaCompra.indexOf(item)})">cambiar</button></li>`;
}
listaDOM.innerHTML = template;
}

// function render() {
//     let template = "";
//     for (const item of listaCompra) {
//         template += `<li class="listClass">${item}<button onclick="deleteItem(${listaCompra.indexOf(item)})">-
//         </button><input style="visibility:hidden" id="editarItem${listaCompra.indexOf(item)}" type="text" value="${item}">
//         <button onclick="modifyItem(${listaCompra.indexOf(item)})">editar</button></li>`;
//     }
//     listaDOM.innerHTML = template;
//     }


//let modificarItem = document.getElementById("editarItem");

/*function modify2(itemName, itemIndex) {
    $itemCompra.value = itemName;
    listaCompra.splice(itemIndex,1);
    render();
}*/
/*function render() {
    let template = "";
    for (const item of listaCompra) {
        template += `<li class="listClass">${item}<button onclick="deleteItem(${listaCompra.indexOf(item)})">-
        </button><button onclick="modify2('${item}', ${listaCompra.indexOf(item)})">editar</button></li> `;
    }
    
    listaDOM.innerHTML = template;
    } */

/* 
Codigo Carmen

let listItem= [];
let nodo_input = document.getElementById("input")
let list_dom= document.getElementById("listDom")

let add=()=>{
    
    listItem.push(nodo_input.value)
    render()
    
}
let deleteItem =(item)=>{
let newList= listItem.filter((element)=>element != item)
listItem = newList
render()
console.log(newList)

}
let editItem =(item)=>{
let newList =[];

 listItem.forEach(element => {
    if( element != item){
        newList.push(element)
        
    }
    listItem = newList
    nodo_input.value = item 
    render()
});
}

let render =()=>{
    let template= ""
    for (const item of listItem) {
        template += `<li>${item} <button onclick="deleteItem('${item}')">Delete</button><button onclick="editItem('${item}')">editar</button></li> `
        console.log(template)
    } 
    
    list_dom.innerHTML= template
    console.log(list_dom)
}
render()
*/