import React, {useState} from 'react'

const Navbar = (props) => {
    const {chooze} = props.func

    const handler = () => chooze()
    return (
        <div className='divNav'>
            <p>Navbar</p>
            <form>
                <button type='button' onClick={ handler }>Test 1</button>
            </form>

        </div>

    )
}

export default Navbar;