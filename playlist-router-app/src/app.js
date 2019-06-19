import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Header from './view/header';
import Footer from './view/footer';
import Main from './view/main';
class App extends Component {
    state = {
        listState: true,
        data: [],
        dataIndex: 0
    };
    add = (title, singer) => {
        let ind = this.state.dataIndex;
        ind += 1;
        this.state.data.push({
            title: title,
            singer: singer,
            if_selected: false,
            if_like: false,
            if_delete: false,
            id: ind
        });
        this.setState({
            data: this.state.data,
            dataIndex: ind
        })
    }

    ifCheckAll = () => {
        const a = this.state.data.filter(v => v.if_selected);
        if (a.length === this.state.data.length && a.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    checkInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const data = this.state.data.map((item, index) => {
            item[name] = value;
            return item;
        })
        this.setState({
            data: data
        });
    }

    checkInputOne = (i, event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const data = this.state.data;
        data.forEach(item => {
            if (item.id === i) {
                item[name] = value
            }
        });
        this.setState({
            data: data
        });
    }

    deleteOne = (id) => {
        const data = this.state.data.filter((v, i) => v.id !== id);
        this.setState({
            data: data
        });
        return false;
    }

    removeSelected = () => {
        const data = this.state.data.filter((v, i) => !v.if_selected);
        this.setState({
            data: data
        });
    }

    likeSelected = () => {
        const data = this.state.data.map(item => {
            if (item.if_selected) {
                item.if_like = true;
            }
            return item;
        });
        this.setState({
            data
        });
    }

    removeLike = () => {
        const data = this.state.data.map(item => {
            if (item.if_selected) {
                item.if_like = false;
            }
            return item;
        });
        this.setState({
            data
        });
    }
    
    render() {
        const { data } = this.state;
        const likeData = data.filter(v => v.if_like);
        const sLen = data.filter(v => v.if_selected).length;
        const lLen = data.filter(v => v.if_like).length;
        return (
            <Router>
                <div className="play-list-wrap">
                    <div>
                        <Link to="/"></Link>
                        <Link to="/header"></Link>
                        <Link to="/like"></Link>
                    </div>
                    <Route component={(match)=>{
                        return (
                            <div>
                                <Route path="/header" component={() => {
                                    return (
                                        <Header
                                            addData={this.add}
                                            history={match.history}
                                            len={data.length}
                                        />
                                    )
                                }} />
                                <Route path="/like" component={() => {
                                    if (!likeData.length) {
                                        return <Redirect to="/" />;
                                    }
                                    return (
                                        <div>
                                            <Main
                                                data={likeData}
                                                ifCheckAll={this.ifCheckAll}
                                                checkAll={this.checkInput}
                                                checkOne={this.checkInputOne}
                                                remove={this.deleteOne}
                                                history={match.history}
                                                pathName={match.location.pathname}
                                            />
                                        </div>
                                    )
                                }} />
                                <Route exact path="/" component={() => {
                                    if(!data.length){
                                        return <Redirect to="/header" />;
                                    }
                                    return (
                                        <div>
                                            <Main
                                                data={data}
                                                ifCheckAll={this.ifCheckAll}
                                                checkAll={this.checkInput}
                                                checkOne={this.checkInputOne}
                                                remove={this.deleteOne}
                                                history={match.history}
                                                pathName={match.location.pathname}
                                            />
                                        </div>
                                    )
                                }} />
                                {
                                    match.location.pathname === '/header'?null:<Footer
                                        data={data}
                                        sLen={sLen}
                                        lLen={lLen}
                                        removeSelected={this.removeSelected}
                                        likeSelected={this.likeSelected}
                                        removeLike={this.removeLike}
                                        history={match.history}
                                        pathName={match.location.pathname}
                                    />
                                }
                            </div>
                        )
                    }} />
                   
                </div>
            </Router>
        );
    }
}

export default App;
