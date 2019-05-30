
const todos = [{
    name: "Code",
    note: "Must do 2 to 3 hours of coding",
    complete: false
}, {
    name: "Laundry",
    note: "Fold and put away the laundry",
    complete: false
}, {
    name: "Clean Bathroom",
    note: "Mop and clean floors in bathroom",
    complete: false
}, {
    name: "Dinner",
    note: "Prepare dinner for tonight",
    complete: true
}]

// loop through the todo array and populate page
// const createTodos = function (todos) {
//     todos.forEach(function(todo){
//        let p = document.createElement('p')
//        const parent = document.querySelector('h1')
//         p.textContent = todo.note
//         parent.parentNode.insertBefore(p,parent.nextSibling)

//     })
// }

// setup a div contain for todos
// setup filters (searchText) and wire up a new filter input to change it
// create a renderTodos function to render and rerender the latest filtered data 

const filters = {
    searchText: ' '
}

const renderTodos = function (todos, filters) {
   const filteredNotes = todos.filter(function (todo) {
       return todo.note.toLowerCase().includes(filters.searchText.toLowerCase())
   })

    // check which todos are NOT complete
    const incompleteTodos = todos.filter(function (todo) {
        return !todo.complete
    })

   document.querySelector('#todos').innerHTML = ' '

    // print message of how many incomplete todos remain
    const message = document.createElement('h2')
    message.textContent = `you have ${incompleteTodos.length} items left for the day!`
    document.querySelector('#todos').appendChild(message)

   filteredNotes.forEach(function (todo) {
       const newEl = document.createElement('p')
       newEl.textContent = todo.note
       document.querySelector('#todos').appendChild(newEl)
   })
}


renderTodos(todos, filters)


// createTodos(todos)

//create a form with a single input for todo text
//setup a submit handler and cancel the deafult action 
//add a new item to the todos array with that text data (completed value of false)
//rerender the application 
//clear the input field value

// add event listener
document.querySelector('#create-todo').addEventListener('input' ,function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({ 
        name: e.target.elements.newTodo.value, 
        note: e.target.elements.newTodo.value, 
        complete: false
    })
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ' '
})

