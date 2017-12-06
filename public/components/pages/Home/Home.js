import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Image, Loader, ImageTile } from '../../common';
import { login, signup, validateToken } from '../../../actions';

let email, password;

class _Home extends React.PureComponent {
   constructor(props) {
       super(props);
       this.props.validateToken();
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
        if (!this.props.user.isInit) {
            return (
                <div className="home loader">
                    <Loader size="XS" />
                </div>
            )
        }
        if (this.props.user.isInit && this.props.user.email && this.props.user.token) {
            setTimeout(() => this.props.history.push('/dashboard'), 10);
            return null;
        }
        return (
            <div className="home">
                <section className="first">
                    <div className="logo">
                        <Image size="L" src="assets/img/logo.png" />
                    </div>
                    <div className="prodIntro">
                        <div>
                            <ImageTile 
                                headerText="Records"
                                footerText="Create records that will outlast what they are documenting."
                                imageURL="assets/img/car.png"
                            />
                        </div>
                        <div>
                            <ImageTile 
                                headerText="Verification"
                                footerText="Verify your products. Fight counterfeit goods."
                                imageURL="assets/img/paint-and-shoe.png"  
                            />
                        </div>
                        <div>
                            <ImageTile 
                                headerText="Stories"
                                footerText="Tell your product’s story. Create an Experience."
                                imageURL="assets/img/shirt-and-tree.png"  
                            />
                        </div>
                    </div>
                    <div className="fqContainer">
                        <div className="qrcode">
                            <ImageTile 
                                imageURL="assets/img/qrcode-front-icon.png" size="XXS" 
                                imageSize="S"
                                footerText="Generates QR code to retrieve data"
                            />
                        </div>
                        <div className="form">
                            <div>
                                <Input type="email"  placeholder="email" icon="assets/img/mail-icon.png" refe={this.emailRef}  />
                                <Input type="password" placeholder="password" icon="assets/img/lock-icon.jpg" refe={this.passwordRef} />
                            </div>
                            <div className="buttons">
                                <Button title="Sign Up" onClick={this.signup} />
                                <Button title="or log in" onClick={this.login} />
                            </div>
                        </div>
                        <div className="fake">

                        </div>
                    </div>
                </section>
                <div className="videoContainer">
                    <h3>Don't know how to use? Watch this</h3>
                    <iframe width="480" height="315"
                        src="https://www.youtube.com/embed/Ym8pVPJhlmw?controls=1">
                    </iframe>
                </div>
            </div>
        );
    }
   
}



const mapDispacthToProps = ({
    login,
    signup,
    validateToken
});

const mapStateToProps = ({ user }) => ({
    user
});

const Home = connect(mapStateToProps, mapDispacthToProps)(_Home);

export { Home };