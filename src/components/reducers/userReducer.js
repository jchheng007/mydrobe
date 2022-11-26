import {useReducer} from 'react'
import {signingUp, signingIn, confirmSignUp} from "../../App"

 const userReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {

        case "USER_EMAIL":
            console.log("user email in userReducer", payload.email)
            return payload.email

        case "GUEST_SESSION":
            console.log("payload is", payload)
            return {
                ...state,
                user: null
            }

        case "USER_SESSION":
            console.log("payload is in user_session", payload.user)
            return {
                ...state, 
                user: payload.user
            }

        case "SIGN_IN":
            const signedInUser =  signingIn(payload.email, payload.password)
            console.log("signedInUsr is from userREducer", signedInUser)
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                user :signedInUser,
                
            }

        case "SIGN_UP":
            signingUp(payload.firstName, payload.lastName, payload.email, payload.password)
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password,
                
            }

        case "CONFIRM":
             confirmSignUp(payload.email, payload.confirmationCode)
             console.log(`fomr userReducer is ${payload.email}`)
            return {
                ...state,
                email: payload.email,
                confirmationCode: payload.confirmationCode
            }
        
    }

    return;
}


export default userReducer;