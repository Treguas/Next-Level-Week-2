document.querySelector('#add-time').addEventListener('click', cloneField)



function cloneField() {

    //cloneNode vai pegar todos os campos da tag no HTML
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   const fields = newFieldContainer.querySelectorall('input')


    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}