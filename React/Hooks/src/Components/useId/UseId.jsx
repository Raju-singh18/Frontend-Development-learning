
import React, { useId } from 'react'

const UseId = () => {

//!============================================ 
//     const usernameId = useId();
//     const emailId = useId();
//     const passwordId = useId();

//   return (
//     <form action="">
//         <div>
//             <label htmlFor={usernameId}>Username:</label>
//             <input type="text" id={usernameId} name='name' />
//         </div>
//         <div>
//             <label htmlFor={ emailId}>Email:</label>
//             <input type="email" id={emailId} name='email' />
//         </div>
//         <div>
//             <label htmlFor={passwordId}>password:</label>
//             <input type="password" id={passwordId} name='password' />
//         </div>
//         <button type='submit'>Submit</button>
//     </form>
//   )
// !===============================================================================

const id = useId();
   return (
    <form action="">
        <div>
            <label htmlFor={id+"usernameId"}>Username:</label>
            <input type="text" id={id+"usernameId"} name='name' />
        </div>
        <div>
            <label htmlFor={id+ "emailId"}>Email:</label>
            <input type="email" id={id+"emailId"} name='email' />
        </div>
        <div>
            <label htmlFor={id+"passwordId"}>password:</label>
            <input type="password" id={id+"passwordId"} name='password' />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UseId;
