import { useReducer } from 'react'

const initialState = {
    firstName: {
        value:"",
        error:""
    },
    lastName: {
        value:"",
        error:""
    },
    email: {
        value:"",
            error:""
        },
        hasBeenSubmitted: false
    }

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_FIRSTNAME_VALUE":
            return{
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload
                }
            }
            case "SET_FIRSTNAME_ERROR":
                return{
                    ...state,
                    firstName: {
                        ...state.firstName,
                        error: action.payload
                    }
                }
                case "SET_LASTNAME_VALUE":
                    return{
                        ...state,
                        lastName: {
                            ...state.lastName,
                            value: action.payload
                        }
                    }
                    case "SET_LASTNAME_ERROR":
                        return{
                            ...state,
                            lastName: {
                    ...state.lastName,
                    error: action.payload
                }
            }
            case "SET_EMAIL_VALUE":
                return{
                    ...state,
                    email: {
                        ...state.email,
                        value: action.payload
                    }
                }
                case "SET_EMAIL_ERROR":
                    return{
                        ...state,
                        email: {
                            ...state.email,
                            error: action.payload
                        }
                    }
                }
            }

export const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleFirstName = (e) => {
        if(e.target.value.length < 2){
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: "First name must be at least 2 characters!"
            })
        } else {
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: ""
            })
        }
        dispatch({
            type: "SET_FIRSTNAME_VALUE",
            payload: e.target.value
        })
    }

    const handleLastName = (e) => {
        if(e.target.value.length < 2){
            dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: "Last name must be at least 2 characters!"
            })
        } else {
            dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: ""
            })
        }
        dispatch({
            type: "SET_LASTNAME_VALUE",
            payload: e.target.value
        })
    }

    const handleEmail = (e) => {
        if(e.target.value.length < 5) {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Email must be at least 5 characters!"
            })
        } else {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: ""
            })
        }
        dispatch({
            type: "SET_EMAIL_VALUE",
            payload: e.target.value
        })
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={(e)=> handleFirstName(e)}></input>
                </div>  
                {
                    state.firstName.error ?
                    <p>{ state.firstName.error }</p> : null
                }
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={(e)=> handleLastName(e)}></input>
                </div>
                {
                    state.lastName.error ?
                    <p>{ state.lastName.error }</p> : null
                }
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e)=> handleEmail(e)}></input>
                </div>
                {
                    state.email.error ?
                    <p>{ state.email.error }</p> : null
                }
            </form>
            <div>   
                <ul>
                    <li>First Name: { state.firstName.value }</li>
                    <li>Last Name: { state.lastName.value }</li>
                    <li>Email: { state.email.value }</li>
                </ul>
            </div>
        </div>
    )
}

export default Form