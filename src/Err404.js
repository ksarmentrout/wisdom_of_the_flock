import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


class Err404 extends React.Component {
    render() {
        return (
            <Container>
                <h1>404: Not Found</h1>
                <Button href="/">
                    Home
                </Button>
            </Container>
        )
    }
}

export default Err404
