const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        //+ change string to num

        const increment = target/ 200
        
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            //Math.ceil rounded UP to the nearest Integer
            setTimeout(updateCounter, 5)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})