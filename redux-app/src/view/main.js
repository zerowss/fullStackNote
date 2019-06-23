import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTb from './itemTb';

class Main extends Component {
    state = {}
    getSelectNum = () => {
        return this.props.data.filter(v => v.if_selected).length;
    }
    getLikeNum = () => {
        return this.props.data.filter(v => v.if_like).length;
    }

    render() {
        console.log('main',this.props);
        
        return (
            <div className="list-table">
                < table border="1" >
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="if_selected"
                                    checked={this.props.ifCheckAll}
                                    onChange={(e)=>{
                                        this.props.dispatch({
                                            type: 'CHECK_ALL',
                                            check: e.target.checked
                                        })
                                    }}
                                />
                            </th>
                            <th>歌曲名</th>
                            <th>歌手</th>
                            <th>收藏</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemTb {...this.props} />
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

export default connect((state,props)=>{
    let ifCheckAll = true;
    state.data.forEach(item => {
        if (!item.if_selected) {
            ifCheckAll = false;
        }
    })

    return Object.assign({},state,{ifCheckAll});
})(Main);
