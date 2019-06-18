import React, { Component } from "react";
class Header extends Component {
    state = {
        title: "",
        singer: ""
    };
    changeInputValue = (e)=>{
        let o = {};
        o[e.target.name] = e.target.value;
        this.setState({...o});
    }
    render() {
        return (
            <div className="list-header">
                <h3>播放列表</h3>
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
                            this.props.addData(this.state.title, this.state.singer);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Header;
