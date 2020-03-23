import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


class Error extends React.Component {
    constructor(props) {
        super();
        this.state = {
            errorMsg: props.errorMsg
        };
    }
    render() {
        return (
            <Container>
                <h1>Sorry! An error has occurred:</h1>
                <p>{this.state.errorMsg}</p>
                <Button href="/">
                    Home
                </Button>
            </Container>
        )
    }
}

export default Error
