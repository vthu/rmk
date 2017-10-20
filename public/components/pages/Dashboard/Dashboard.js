import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../../common';

class _Dashboard extends React.PureComponent {
    render () {
        return (
            <div className="dashboard">
                <Header />
                <p>Email: {this.props.user.email}</p>
                <p>Token: {this.props.user.token}</p>
            </div>
        )
    }
}
const mapStateToProps = ({ user }) => ({ user })

const Dashboard = connect(mapStateToProps, null)(_Dashboard);

export { Dashboard };