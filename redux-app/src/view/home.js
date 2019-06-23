import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Main from './main';
import Footer from './footer';
class Home extends Component {
    state = {  } 
    render() {
        console.log('home',this.props);
        const pathName = this.props.location.pathname;
        return ( 
            <div>
                <header>    
                    <h3>{`${pathName === '/' ? '播放' : '收藏'}`}列表</h3>
                    <Link to='/header'>添加歌曲</Link>
                </header>
                <Route path='/' exact component={Main} />
                <Route path='/like' render={(e) => {
                    const l_data = this.props.data.filter(v=>v.if_like);
                    if (!l_data.length) {
                        return <Redirect to="/" />;
                    }
                    return <Main {...e} />
                }} />
                <Footer {...this.props} />
            </div>
         );
    }
}
 
export default connect(state=>state)(Home);
