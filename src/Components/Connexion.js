import React, { Component } from 'react'

class Connexion extends Component {
    render () {
        return (
            <div className='connexionBox'>
                <form className='connexion'>
                    <input
                    placeholder='Pseudo'
                    type='text'
                    required
                    />
                </form>
                <button>GO</button>
            </div>
        )
    }
}

export default Connexion;