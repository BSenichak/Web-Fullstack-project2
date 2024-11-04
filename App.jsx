class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <Counter />
                </main>
                <Footer />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <h1 className="header">Header</h1>
        )
    }
}


class Footer extends React.Component {
    style = {
        backgroundColor: 'blue',
        textAlign: 'center',
    }
    render() {
        return (
            <h3 style={this.style}>&copy;Robocode {new Date().getFullYear()}</h3>
        )
    }
}

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.reset = this.reset.bind(this);
    }

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    subtract = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <p>{this.state.count}</p>
                <button onClick={this.add}>Add</button>
                <button onClick={this.subtract}>Subtract</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}