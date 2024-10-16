console.log('hiii');


let todoList = [{
    item: 'hetu',
    dueDate: '02/10/2024'
},
{

    
    item: 'chavda',
    dueDate: '02/10/2024'
}];
displayItems();
function addTodo() {
    let inputElememt = document.querySelector('#floatingInput');
    let dateElememt = document.querySelector('#tododate');
    let todoItem = inputElememt.value;
    let todoDate = dateElememt.value;

    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElememt.value = '';
    dateElememt.value = '';
    displayItems();
}
function displayItems() {
    let containerElement = document.querySelector('.todocontainer');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];

        newHtml += `
        <div class="d-flex justify-content-between">
        <span>${item}</span>
         <span>${dueDate}</span>
        <button class="btn btn-success mt-2 "onclick="todoList.splice(${i},1);displayItems();">Delete</button>
        </div>
        `;

    }
    containerElement.innerHTML = newHtml;

}