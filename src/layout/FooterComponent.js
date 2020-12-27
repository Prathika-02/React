import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <br/>
                <footer className = "footer">
                    <p>Electronics Purchase Store &copy; copyrights 2020</p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent