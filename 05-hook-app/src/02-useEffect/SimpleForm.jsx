import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        userName: 'GPlastic',
        email: 'alexis@gmail.com'
    })

    const { userName, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // Se ejecuta cuando se re dibuja el componente
    useEffect(() => {
        // console.log('useEffect called!')
    }, [])

    // Solo cuando cambie algo en el formState
    useEffect(() => {
        // console.log('formState changed!')
    }, [formState])

    // Solo cuando cambie algo en el formState
    useEffect(() => {
        // console.log('email changed!')
    }, [email])


    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={userName}
                onChange={onInputChange}
            />

            <input
                type="email"
                className='form-control mt-2'
                placeholder='example@email.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {
                userName === 'GPlastic' && <Message />
            }
        </>
    )
}
