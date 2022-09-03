import React from "react"
class MyClassApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            intervalID: 0
        }
    }

    HandleButton = (e) => {
        const { intervalID } = this.state
        e.preventDefault()
        if (intervalID) {
            clearInterval(intervalID)
            this.setState({
                intervalID: 0
            })
            return
        }

        const NewId = setInterval(() => {
            this.setState((prev) => {
                return {
                    count: prev.count + 1
                }
            })

        }, 1000)

        this.setState({ intervalID: NewId })

    }
    render() {
        const { count, intervalID } = this.state
        return (
            <>
                <h1> App with Class Component...</h1>
                <h2>Your Count : {count}</h2><br />
                <h2>See your Interval Id : {intervalID}</h2>
                Start Your Counter <button
                    type="submit"
                    onClick={this.HandleButton}
                >{intervalID ? "Stop" : "Start"}</button>

            </>
        )
    }
}

export default MyClassApp;