import React, { Component } from 'react'
import loading from './spinnerico.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
            <img src={loading} alt="Loding" />
                
            </div>
        )
    }
}
