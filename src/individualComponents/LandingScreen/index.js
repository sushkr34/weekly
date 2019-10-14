import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Feature from './Feature';
class landingScreen extends React.Component{
    render(){
        const { history } = this.props;
        return (
            <div className="landing-screen">
                <div className="head-bann">
                    <Header history={history} />
                    <Banner />
                </div>
                <div className="feat-foot">
                    <Feature />
                    <Footer />
                </div>
            </div>
        )
    }
}
export default landingScreen;