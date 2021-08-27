const control = document.querySelector('form');
const bill = document.querySelector('[name="bill"]');
const radio = document.querySelectorAll('[type="radio"]');
const btn = document.querySelector('button');
const htmlTip = document.querySelector('.num');
const htmlTotal = document.querySelector('.num-two');
const custom = document.querySelector('.custom');
const numPeople = document.querySelector('[name="numberPeople"]')

function handleChange(e) {
    const value = e.target.value


    custom.addEventListener('change', (e) => {
        const customVal = +e.target.value
        const anotherVal = (+value * (customVal / 100))
        const newValue = anotherVal + +value
        const numPeople = document.querySelector('[name="numberPeople"]')
        numPeople.addEventListener('keyup', (event) => {
            const num = +event.target.value
            const tipPerson = anotherVal / num
            htmlTip.innerHTML = `$${tipPerson.toFixed(2)}`
            htmlTotal.innerHTML = `$${(newValue / num).toFixed(2)}`
        })
    })

    radio.forEach((item, index) => {
        item.nextElementSibling.addEventListener('click', () => {
            const valueRadio = (+value * (+item.id / 100))
            const newValue = valueRadio + +value
            console.log(valueRadio)
            numPeople.addEventListener('keyup', (event) => {
                const num = +event.target.value
                const tipPerson = valueRadio / num
                const tipPersonTotal = newValue / num
                if (tipPerson !== Infinity) {
                    numPeople.classList.remove('empy')
                    numPeople.previousElementSibling.classList.remove('empy')
                    htmlTip.innerHTML = `$${tipPerson.toFixed(2)}`
                } else {
                    numPeople.classList.add('empy')
                    numPeople.previousElementSibling.classList.add('empy')
                    htmlTip.innerHTML = '$0.00'
                }
                if (tipPersonTotal !== Infinity) {
                    htmlTotal.innerHTML = `$${(tipPersonTotal).toFixed(2)}`
                } else {
                    htmlTotal.innerHTML = '$0.00'
                }
            })
        })
    })

}
bill.addEventListener('change', handleChange)

function onClick(e) {
    e.preventDefault()
    control.reset()
    htmlTip.innerHTML = `$0.00`
    htmlTotal.innerHTML = `$0.00`
    numPeople.classList.remove('empy')
    numPeople.previousElementSibling.classList.remove('empy')
}
btn.addEventListener('click', onClick)