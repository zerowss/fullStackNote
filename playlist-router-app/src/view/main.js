import React, { Component } from 'react';

import ItemTb from './itemTb';

class Main extends Component {
    state = {}
    getSelectNum = () => {
        return this.props.data.filter(v => v.if_selected).length;
    }
    getLikeNum = () => {
        return this.props.data.filter(v => v.if_like).length;
    }

    goToPage = ()=>{
        this.props.history.push('/header');
    }
    render() {
        return (
            <div className="list-table">
                <h3>{`${this.props.pathName === '/'?'播放':'收藏'}`}列表</h3>
                <button style={{float:'right'}} onClick={this.goToPage}>增加歌曲</button>
                < table border="1" >
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="if_selected"
                                    checked={this.props.ifCheckAll()}
                                    onChange={this.props.checkAll}
                                />
                            </th>
                            <th>歌曲名</th>
                            <th>歌手</th>
                            <th>收藏</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemTb
                            data={this.props.data}
                            checkOne={this.props.checkOne}
                            remove={this.props.remove}
                            history={this.props.history}
                        />
                    </tbody>
                </table>
                <div style={{ height: '30px', lineHeight: '30px', overflow: 'hidden' }}>
                    <span style={{ float: 'left' }}>共{this.props.data.length}首</span>
                    <span style={{ float: 'right' }}>选中{this.getSelectNum()}首</span>
                    <span style={{ float: 'right' }}>收藏{this.getLikeNum()}首</span>
                </div>
            </div>
        );
    }
}

export default Main;
