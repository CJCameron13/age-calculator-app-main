const dayInput = document.querySelector('#day-input')
const monthInput = document.querySelector('#month-input')
const yearInput = document.querySelector('#year-input')
const entryContainer = document.querySelector('#entry-container')
const calculate = document.querySelector('#image-circle')
let date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth() + 1
let currentDate = date.getDate()

//Day Validation

calculate.addEventListener('click', () => {
    const dayUserInput = dayInput.value
    const monthUserInput = monthInput.value
    if (dayUserInput === '') {
        entryContainer.classList.add('day-error', 'empty-day-error')
    } else if (dayUserInput < 1 || dayUserInput > 31) {
         entryContainer.classList.add('day-error', 'invalid-day-error')
     } else if (Number.parseInt(monthUserInput, 10) === 4 || Number.parseInt(monthUserInput, 10) === 6 || Number.parseInt(monthUserInput, 10) === 9 || Number.parseInt(monthUserInput, 10) === 11 && dayUserInput > 30) {
        entryContainer.classList.add('day-error', 'invalid-day-error')
     } else if (Number.parseInt(monthUserInput, 10) === 2 && dayUserInput > 29) {
        entryContainer.classList.add('day-error', 'invalid-day-error')
     } else {
        entryContainer.classList.remove('day-error', 'invalid-day-error', 'empty-day-error')
     }
})

//Month Validation

calculate.addEventListener('click', () => {
    const monthUserInput = monthInput.value
    if (monthUserInput === '') {
        entryContainer.classList.add('month-error', 'empty-month-error')
    } else if (monthUserInput < 1 || monthUserInput > 12) {
        entryContainer.classList.add('month-error', 'invalid-month-error')
    } else {
        entryContainer.classList.remove('month-error', 'invalid-month-error', 'empty-month-error')
    }
})

//Year Validation

calculate.addEventListener('click', () => {
    const yearUserInput = yearInput.value
    if (yearUserInput === '') {
        entryContainer.classList.add('year-error', 'empty-year-error')
    } else if (yearUserInput > currentYear) {
        entryContainer.classList.add('year-error', 'invalid-year-error')
    } else {
        entryContainer.classList.remove('year-error', 'invalid-year-error', 'empty-year-error')
    }
})

//Year Calculation

calculate.addEventListener('click', () => {
    const yearUserInput = yearInput.value
    const monthUserInput = monthInput.value
    const dayUserInput = dayInput.value
    const yearsValue = document.querySelector('#years-value')
    let calculatedYears = currentYear - yearUserInput
    if (monthUserInput > currentMonth) {
        yearsValue.textContent = calculatedYears - 1
    } else if (Number.parseInt(monthUserInput, 10) === currentMonth && dayUserInput > currentDate) {
        yearsValue.textContent = calculatedYears - 1
    } else {
        yearsValue.textContent = calculatedYears
    }
})

//Month Calculation

calculate.addEventListener('click', () => {
    const monthUserInput = monthInput.value
    const monthsValue = document.querySelector('#months-value')
    if (monthUserInput < currentMonth) {
        monthsValue.textContent = currentMonth - monthUserInput
    } else if (monthUserInput > currentMonth) {
        monthsValue.textContent = currentMonth - monthUserInput + 12
    } else {
        monthsValue.textContent = 0
    }
})

//Day Calculation

calculate.addEventListener('click', () => {
    const dayUserInput = dayInput.value
    const daysValue = document.querySelector('#days-value')
    if (currentDate > dayUserInput) {
        daysValue.textContent = currentDate - dayUserInput
    } else if (currentDate < dayUserInput) {
        daysValue.textContent = currentDate - dayUserInput + 31
    }
})
