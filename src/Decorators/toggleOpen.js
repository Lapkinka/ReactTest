import React,{Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent{
    state = {
        isOpen:false
    };
    // componentDidMount() {
    //     console.log("didMount in Toggle")
    // }
    // componentDidUpdate() {
    //     console.log("Update in Toggle")
    // }
    // componentWillUnmount(){
    //     console.log("WillUnmount")
    // }
    render(){
        // return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }
    toggleOpen = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
        // console.log("SETSTATE",this.state.isOpen);
    }
}