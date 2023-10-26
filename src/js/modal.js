const btnOpenModal  = document.querySelector('#open');
const itemAll = document.querySelectorAll('.road-map__item');
const sityDiv = document.querySelector('.road-map__sity');

const arrModalItemsAll = [
    {
        year: '2019',
        title: 'начало разработки',
        text: 'алгоритма прогнозирования многомерных временных последовательностей',
    },
    {
        year: '2020',
        title: 'применение нейронных сетей',
        text: 'для классификации и прогнозирования данных',
    },
    {
        year: '2021',
        title: 'получен опытный рабочий комплекс',
        text: 'успешно прогнозирующий поведение криптоактивов',
    },
    {
        year: '2022',
        title: 'разработка рабочей версии ',
        text: 'продукта, запуск бета теста',
    },
    {
        year: '2023',
        title: 'начало продаж',
        text: 'продукта, разработка серии нейросетей и создание маркеплейса',
    },
    {
        year: '2024',
        title: 'проведение IDO',
        text: 'NFT-токены нейросетей для прогнозирования свободно обращаются на маркетплейсе, теперь вы можете купить понравившуюся вам нейросеть в виде NFT токена и продавать к нему доступ получая комиссию.',
    },
]


// console.log( btnOpenModal.getAttribute('data-year'));

itemAll.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        const {target} = event;
        if(target.id === 'open' || target.id === 'open-img'){
            let modalItem;
            let dataYear;
            let indexArrModalItems;
            const currentModal = document.querySelector('.modal');

            //Получаем дата атрибут года
            if(target.id === 'open-img'){
                dataYear = target.parentNode.getAttribute('data-year');
            }
            else{
                dataYear = target.getAttribute('data-year');
            }

            //Если элемента нет на странице, то выводим его
            if(!currentModal){
                for(let i=0; i < arrModalItemsAll.length; i++){
                    if(dataYear === arrModalItemsAll[i].year){
                        modalItem = getModalItem(dataYear, i);
                    }
                }
                sityDiv.append(modalItem);
            }
            //если элемент есть, то удаляем его
            else{
                currentModal.remove();
            }
        }
        
    });
});

function getModalItem (year, index){
    const title = arrModalItemsAll[index].title;
    const text = arrModalItemsAll[index].text;
    let item = document.createElement('div');
    item.classList.add('modal');
    item.classList.add(`year-${year}`);
    item.innerHTML =  `
    <div class="modal__wrapper">
        <button class="modal__close-btn" id="close"><img src="icons/Clear.png" alt=""></button>
        <div class="modal__year">${year}</div>    
        <div class="modal__title">${title}</div>
        <div class="modal__text">${text}</div>
        <button class="modal__btn ${year === '2019' ? 'dp-n' : ''}" id="prev-year">←</button>
        <button class="modal__btn" id="next-year">→</button>
    </div>
    `
    return item
}