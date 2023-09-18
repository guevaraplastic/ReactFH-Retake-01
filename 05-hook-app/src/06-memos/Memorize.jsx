import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter <small><Small value={counter} /></small></h1>
            <hr />

            <button
                onClick={() => increment()}
                className="btn btn-primary"
            >+1</button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
