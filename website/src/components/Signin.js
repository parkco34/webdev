import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import {withStyles} from '@material-ui/core/styles';
import LoginButton from './clicks/LoginButton';


//                        <div className="the-pressy">
//                            <Button
//                                variant="contained"
//                                color="primary"
//                                onClick={()=>{this.entre();}}
//                            >
//                                Log In
//                            </Button>
//                        </div>

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		margin: '15%'
	},
});

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
            open: false,
        };
    }

    setEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    setPassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    entre = () => {
        // Something goes here
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
		const {classes} = this.props;

        return (
            <div className="signin-container">
                <header className="signin-header">
                    <div className={classes.root}>
                        <TextField
                            variant="standard"
                            placeholder="Email"
                            margin="normal"
                            required
                            onChange={this.setEmail}
                            value={this.state.email}
                        />

                        <TextField
                            variant="standard"
                            placeholder="Password"
                            margin="normal"
                            required
                            onChange={this.setPassword}
                            value={this.state.password}
                        />

						<LoginButton title="Submit" />

                    </div>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {this.state.message}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Okay
                            </Button>
                        </DialogActions>
                    </Dialog>
                </header>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Signin);
