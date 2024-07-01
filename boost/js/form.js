import { PRIORITIES, CATEGORIES } from './constants.js';

export function createSelectOptions(selectId, options) {
    const selectForm = document.getElementById(selectId); // para garantir q n virá um elemento nulo na linha 14
    //ou então para ficar mais específico ainda posso usar o HTMLFormElement pra ganhar a funçâo checkValidity(), só com HTMLElement não tenho essa função
    if (!selectForm.checkValidity()) {
    }
    const optionList = Object.values(options);
    optionList.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.innerText = option.text; //para arrumar type unknown do option podemos criar uma interface
        optionElement.value = option.value;
        selectForm.appendChild(optionElement);
    });
}
/* export function createCategorySelectOptions() {
  const selectForm = document.querySelector('#category')
  
  const categoryList = Object.values(CATEGORIES)

  categoryList.forEach((category) => {
    const option = document.createElement('option')

    option.innerText = category.text
    option.value = category.value

    selectForm.appendChild(option)
  })
} */
export function clearForm() {
    const title = document.querySelector('#title');
    const priority = document.querySelector('#priority');
    const description = document.querySelector('#description');
    const category = document.querySelector('#category');
    const date = document.querySelector('#date'); /* se eu definir apenas HTMLElement aqui ele
    continua dando erro pq não encontra o value, e é importante definir o null porque eu não tenho como ter certeza de que o elemento vai estar lá
  */
    title.value = '';
    priority.value = PRIORITIES.high.value;
    description.value = '';
    category.value = CATEGORIES.personal.value;
    if (date) {
        date.value = '';
    }
}
/* semana 2
Limpar os dados do formulário
export function clearForm() {
  const title = document.querySelector('#title')
  const priority = document.querySelector('#priority')
  const description = document.querySelector('#description')
  const category = document.querySelector('#category')
  const date = document.querySelector('#date')

  title.value = ''
  priority.value = PRIORITIES.high.value
  description.value = ''
  category.value = 'personal'
  date.value = ''
}

const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click', clearForm)


*/ 
