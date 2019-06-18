import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        const { data } = this.props;
        const sLen = data.filter(v=>v.if_selected).length;
        const lLen = data.filter(v=>v.if_like).length;
        return ( 
            <div className="list-footer" style={{display: data.length?'block':'none'}}>
                <button style={{display: sLen?'':'none'}} onClick={this.props.removeSelected}>删除选中</button>
                <button style={{display: sLen?'':'none'}} onClick={this.props.likeSelected}>收藏选中</button>
                <button style={{display: lLen?'':'none'}} onClick={this.props.removeLike}>取消选中收藏</button>
                <button onClick={this.props.lookLike} >查看收藏清单</button>
                <button onClick={this.props.lookAll}>查看所有清单</button>
            </div>
         );
    }
}
 

export default Footer;
