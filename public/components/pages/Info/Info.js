import React from 'react';
import { connect } from 'react-redux';
import { Card, Loader } from '../../common';
import { fetchProductInfo } from '../../../actions';


class _Info extends React.PureComponent {
    constructor(props) {
        super(props);
        const address = this.props.match.params.address;
        if (!address) {
            alert('The link is missing contract address');
        } else {
            this.props.fetchProductInfo(address);
        }
    }

    render() {
        const { prodInfo } = this.props;
        if (!prodInfo.isInit) {
            return (
                <div className="info loader">
                    <Loader size="XS" message="Hang on! we are loading the product info" />
                </div>
            )
        }
        return (
            <div className="info">
                <h3>Name: {prodInfo.name}</h3>
                <h3>Price in ETH: {prodInfo.price}</h3>
                {
                    prodInfo.stories && prodInfo.stories.length > 0 ?
                    prodInfo.stories.map(story => <Card src={story.imageURL} description={story.description} date={story.date} />)
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = ({ prodInfo }) => ({ prodInfo });

const mapDispatchToProps = {
    fetchProductInfo
};


const Info = connect(mapStateToProps, mapDispatchToProps)(_Info);

export { Info }