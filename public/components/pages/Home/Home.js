import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Image } from '../../common';
import { login, signup } from '../../../actions';

let email, password;

class _Home extends React.PureComponent {
   constructor(props) {
       super(props);
   }

    emailRef =  input => {
        email = input;
    };

    passwordRef = (input) => {
        password = input;
    };

    login = async () => {
        if (email.value && password.value) {
            await this.props.login(email.value, password.value);
            this.props.history.push('/dashboard')
        }
    };

    signup = async () => {
        if (email.value && password.value) {
            await this.props.signup(email.value, password.value);
            this.props.history.push('/dashboard')
        }
    };

    render() {
        return (
            <div className="home">
                <div>
                    <Image size="L" src="assets/img/logo.png" />
                </div>
                <div>
                    <p>Blockchain for everyday life</p>
                </div>
                <div>
                    <Image size="S" src="assets/img/user.png" />
                </div>
                <div>
                    <Input type="email"  placeholder="Email" icon="assets/img/mail-icon.png" refe={this.emailRef}  />
                    <Input type="password" placeholder="Password" icon="assets/img/lock-icon.jpg" refe={this.passwordRef} />
                </div>
                <div>
                    <Button title="Sign Up" onClick={this.signup} />
                    <Button title="or log in" onClick={this.login} />
                </div>
                <div>
                    <p>Sign up to start adding stuff to the blockchain</p>
                </div>
                <div>
                    <p>Note: Must use Google Chrome and install Metamask plug-in</p>
                </div>
            </div>
        );
    }
   
}



const mapDispacthToProps = ({
    login,
    signup  
})

const Home = connect(null, mapDispacthToProps)(_Home);

export { Home };