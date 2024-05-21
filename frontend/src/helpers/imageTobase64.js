<<<<<<< HEAD
const imageTobase64 = async(image) =>{
    const reader = new FileReader()
    reader.readAsDataURL(image)
=======
import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import Context from '../context'
import displayINRCurrency from './displayCurrency'
import { MdDelete } from "react-icons/md";
>>>>>>> 8c325a094d0a5a2ba6b5e7a2b99996cccdefb8d7

    const data = await new Promise((resolve,reject)=>{
        reader.onload = () => resolve(reader.result)

        reader.onerror = error => reject(error)
    })

    return data

}

export default imageTobase64