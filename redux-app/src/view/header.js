import React, { Component } from "react";
import { connect } from 'react-redux';
class Header extends Component {
    state = {
        title: "",
        singer: ""
    };
    changeInputValue = (e) => {
        let o = {};
        o[e.target.name] = e.target.value;
        this.setState({ ...o });
    }
    render() {
        return (
            <div className="list-header">
                <h3>增加歌曲</h3>
                <div>
                    <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputValue}
                        placeholder="歌曲名字"
                    />
                    <input
                        type="text"
                        value={this.state.singer}
                        name="singer"
                        onChange={this.changeInputValue}
                        placeholder="歌手名字"
                    />
                    <input
                        type="button"
                        value="增加"
                        onClick={() => {
                            this.props.dispatch({
                                type: 'ADD',
                                title: this.state.title,
                                singer: this.state.singer
                            });
                            this.setState({
                                title: "",
                                singer: ""
                            })
                        }}
                    />
                    {
                        this.props.data.length?
                            <button onClick={() => {
                                this.props.history.push('/');
                            }}>返回</button>:
                            null
                    }
                    
                </div>
            </div>
        );
    }
}

export default connect(state=>state)(Header);
