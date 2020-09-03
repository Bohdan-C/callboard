import React, {useState} from 'react'

function AddAd({onCreate}) {
    const [state, setState] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if(state.trim()) {
            onCreate(state)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={state} onChange={event => setState(event.target.value)} />
            <button type="submit">Додати оголошеня</button>
        </form>
    )
}

export default AddAd
