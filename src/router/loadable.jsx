import React, { Component, Fragment } from "react";
import Loading from "@/components/Loading/loading.jsx";
import loadable from "react-loadable";

class Page extends Component {
    constructor(props) {
        super()
        this.state = {
            Comp: ''
        }
    }
    render() {
        if (!this.state.Comp) {
            return <Loading />
        } else {
            return <this.state.Comp />
        }
    }
    componentDidMount() {
        import(`@/views/${this.props.path}.jsx`).then((res) => {
                    this.setState({
                        Comp: res.default
                    })
        })
    }
}
function High(path) {
    return class extends Component {
        render() {
            return (<Page path={path}></Page>)
        }
    }
}
export default High