const buttonFullTable = document.querySelector('#full');
const tableResults = document.querySelector('.results__table');

buttonFullTable.addEventListener('click', () =>{
    if(tableResults.classList.contains('full-table')){
        tableResults.classList.remove('full-table');
        buttonFullTable.textContent = "Посмотреть полностью";
    }
    else{
        tableResults.classList.add('full-table');
        buttonFullTable.textContent = "Свернуть";
    }
});
