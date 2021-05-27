import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import '../cssModules/Singin.module.css';

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
        return (
            <div className="signin-container">
                <header className="Signin-header">
                    <div className="signin">
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
                            placeholder="Email"
                            margin="normal"
                            required
                            onChange={this.setEmail}
                            value={this.state.email}
                        />

                        <div className="the-pressy">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={()=>{this.entre();}}
                            >
                                Log In
                            </Button>
                        </div>
                    </div>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
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

export default Signin;
