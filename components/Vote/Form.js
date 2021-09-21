import { useState, useEffect } from "react"

import Button from "../Button"
import Input from "./Input"

const Form = () => {
    const [ disabled, setDisabled ] = useState(false)
    const [ values, setValues ] = useState({ decorated: "", themed: "", spook: "" })
    
    useEffect(() => {
        setDisabled(localStorage.getItem("voted") == "yes")

        try {
            const v = JSON.parse(localStorage.getItem("values"))

            if(Object.keys(v).length == 3) {
                return setValues(v)
            }
            throw new Error("Invalid values")
        } catch(e) {
            localStorage.removeItem("values")
        }
    }, [])

    const submit = (e) => {
        e.preventDefault()

        if(localStorage.getItem("voted") == "yes") {
            alert("You have already voted!")
            return false
        }

        const payload = [...e.target.querySelectorAll("input")].reduce((acc, curr) => ({ 
            ...acc, [curr.name]: curr.value
        }), {})

        fetch("/api/vote", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(() => {
                localStorage.setItem("voted", "yes")
                localStorage.setItem("values", JSON.stringify(payload))
                alert("Successfully voted!")
                setDisabled(true)
            })

        return false
    }

    const change = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value })
    }

    return (
        <div className="mt-28 px-4">
            <div className="border-2 border-black bg-white p-4">
                <h1 className="text-3xl font-semibold mt-4">Vote for the Best Car</h1>
                <p className="mt-2">Enter a booth name!</p>
                    
                <form className="mt-6 flex flex-col items-start" onSubmit={ submit }>
                    <Input placeholder="Best decorated" name="decorated" required disabled={ disabled } value={ values.decorated } onChange={ change("decorated") } />
                    <Input placeholder="Best themed" name="themed" required disabled={ disabled } value={ values.themed } onChange={ change("themed") }/>
                    <Input placeholder="Spookiest" name="spook" required disabled={ disabled } value={ values.spook } onChange={ change("spook") }/>

                    <Button disabled={ disabled }>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Form