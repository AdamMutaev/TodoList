const btn = document.getElementById('addBtn')
const myinput = document.getElementById('myInput')
const menuList = document.getElementById('myUi')

btn.addEventListener('click', () => {
    const list = document.createElement('li')
    const button = document.createElement('button')
    const check = document.createElement('button')
    list.textContent = myinput.value
    button.textContent = 'X'
    check.textContent = '✔'
    list.append(button)
    list.prepend(check)
    menuList.append(list)
    button.addEventListener('click', () =>  {
        list.remove()
    })
    check.addEventListener('click', () => {
        list.style.textDecoration =  'line-through';
    })
    check.addEventListener('dblclick', () => {
        list.style.textDecoration =  'none';
    })
})






































