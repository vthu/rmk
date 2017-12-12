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
                    <div className="container">
                        <div className="logo">
                            <Image size="L" src="assets/img/logo.png" alt="Logo" />
                        </div>
                        <div className="prodIntro">
                            <div className="tile">
                                <ImageTile
                                    headerText="Records"
                                    footerText="Create records that will outlast what they are documenting."
                                    imageURL="assets/img/car.png"
                                />
                            </div>
                            <div className="tile">
                                <ImageTile
                                    headerText="Verification"
                                    footerText="Verify your products. Fight counterfeit goods."
                                    imageURL="assets/img/paint-and-shoe.png"
                                />
                            </div>
                            <div className="tile">
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
                                    <Input type="password" placeholder="password" icon="assets/img/lock-icon.png" refe={this.passwordRef} />
                                </div>
                                <div className="buttons">
                                    <Button title="Sign Up" className="signup" onClick={this.signup} />
                                    <span className="textSpan">or</span><Button title="log in" className="login" onClick={this.login} />
                                </div>
                            </div>
                            <div className="fake">

                            </div>
                        </div>
                    </div>
                </section>

                <section className="second">
                    <div className="container">
                        <div className="logo">
                            <Image size="L" src="assets/img/logo.png" />
                        </div>
                        <p className="storyTitle">Stories</p>
                        <div className="prodIntro">
                            <div className="tile">
                                <Image size="L" src="assets/img/sewing.png" alt="sewing"/>
                            </div>
                            <div className="tile">
                                <p className="storyDesc">
                                    Tell your product’s story<br />
                                    Create an Experience
                                </p>
                                <p>Fabryc enables companies to share their creation process or simply tell a story about their product, creating new experiences and transparency in the marketplace.</p>
                            </div>
                            <div className="tile">
                                <Image size="L" src="assets/img/farming.png" alt="Farming"/>
                            </div>
                        </div>
                        <div className="qrcode">
                            <Image size="S" src="assets/img/qrcode-front-icon.png" alt="QR-Code" />
                            <p>Scan this to see a real world example</p>
                        </div>
                        <div className="etherPowered">
                            <Image size="XS" src="assets/img/ethereum.png" alt="Eather Icon" />
                            <p>powered by the <br /> ethereum blockchain</p>
                        </div>
                    </div>
                </section>

                <section className="third">
                    <div className="container">
                        <div className="logo">
                            <Image size="L" src="assets/img/logo.png" />
                        </div>
                        <p className="storyTitle">Verification</p>
                        <div className="prodIntro">
                            <div className="tile">
                                <Image size="M" src="assets/img/painter-icon.png" alt="Painters"/>
                            </div>
                            <div className="tile">
                                <p className="storyDesc">
                                    Verify your products.<br />
                                    Fight counterfeit goods.
                                </p>
                                <p>We use blockchain technology to create an immutable, decentralzied ledger that allows companies to securely verify their products. </p>
                            </div>
                            <div className="tile">
                                <Image size="M" src="assets/img/shoe-icon.png" alt="Promo Image"/>
                            </div>
                        </div>
                        <div className="qrcode">
                            <Image size="S" src="assets/img/qrcode-front-icon.png" alt="QR-Code" />
                            <p>Scan this to see a real world example</p>
                        </div>
                        <div className="etherPowered">
                            <Image size="XS" src="assets/img/ethereum.png" alt="Eather Icon" />
                            <p>powered by the <br /> ethereum blockchain</p>
                        </div>
                    </div>
                </section>

                <section className="fourth">
                    <div className="container">
                        <div className="logo">
                            <Image size="L" src="assets/img/logo.png" />
                        </div>
                        <p className="storyTitle">Records</p>
                        <Image size="M" src="assets/img/car.png" alt="Promo Image"/>

                        <p className="storyDesc">
                            Never lose track of your records
                        </p>
                        <p className="longDesc">Create a permanent ledger where you can store all of your documents. Keep track of vehicle service records by adding each one to a ledger so they will never get lost.</p>
                        <div className="qrcode">
                            <Image size="S" src="assets/img/qrcode-front-icon.png" alt="QR-Code" />
                            <p>Scan this to see a real world example</p>
                        </div>
                        <div className="etherPowered">
                            <Image size="XS" src="assets/img/ethereum.png" alt="Eather Icon" />
                            <p>powered by the <br /> ethereum blockchain</p>
                        </div>
                    </div>
                </section>

                <section className="footer">
                    <div className="container">
                        <div className="footerContent">
                            <div className="column">
                                <a href="https://twitter.com/" target="_blank">
                                    <Image size="XXS" src="assets/img/twitter-icon.png" alt="Twitter"/>
                                </a>
                            </div>
                            <div className="column">
                                <span className="whiteText">Whitepaper</span>
                            </div>
                            <div className="column">
                                <a href="mailto:blockchain@fabryc.org" target="_blank">blockchain@fabryc.org</a>
                            </div>
                        </div>
                    </div>
                </section>
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