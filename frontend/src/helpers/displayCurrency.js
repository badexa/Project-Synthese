const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN',{
        style : "currency",
<<<<<<< HEAD
        currency : 'INR',
=======
        currency : 'MAD',
>>>>>>> 8c325a094d0a5a2ba6b5e7a2b99996cccdefb8d7
        minimumFractionDigits : 2
    })

    return formatter.format(num)

}

export default displayINRCurrency