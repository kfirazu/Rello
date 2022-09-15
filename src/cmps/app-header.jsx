import { Link } from "react-router-dom"

export const AppHeader = () => {
    return (
        <div className='flex app-header'>
            <div className='logo'>Trello</div>
            {/* <nav></nav> */}
            <div className='flex header-btns'>
                <Link to='login' className='login-link'>Log in</Link>
                <Link to='login' className='login-link'>Sign up</Link>
                <Link to='template' className='btn btn-wide'>Go to your boards</Link>
            </div>
        </div>
    )
}

// import React from 'react'
// import { connect } from 'react-redux'
// import { Link, NavLink } from 'react-router-dom'

// import routes from '../routes'


// import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

// function _AppHeader({ onLogin, onSignup, onLogout, user }) {

//     return (
//         <header className="app-header">
//             <nav>
//                 {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}

//                 {user &&
//                     <span className="user-info">
//                         <Link to={`user/${user._id}`}>
//                             {user.imgUrl && <img src={user.imgUrl} />}
//                             {user.fullname}
//                         </Link>
//                         <span className="score">{user.score?.toLocaleString()}</span>
//                         <button onClick={onLogout}>Logout</button>
//                     </span>
//                 }

//                 {!user &&
//                     <section className="user-info">
//                         <LoginSignup onLogin={onLogin} onSignup={onSignup} />
//                     </section>
//                 }

//             </nav>

//             <h1>My App</h1>
//         </header>
//     )
// }

// function mapStateToProps(state) {
//     return {
//         users: state.userModule.users,
//         user: state.userModule.user,
//         count: state.userModule.count,
//         isLoading: state.systemModule.isLoading
//     }
// }
// const mapDispatchToProps = {
//     onLogin,
//     onSignup,
//     onLogout,
//     loadUsers,
//     removeUser
// }



// export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)