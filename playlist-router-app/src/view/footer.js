import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        const { data } = this.props;
        const sLen = this.props.sLen;
        const lLen = this.props.lLen;
        const pathName = this.props.pathName; 
        return ( 
            <div className="list-footer" style={{display: data.length?'block':'none'}}>
                <button style={{display: sLen?'':'none'}} onClick={this.props.removeSelected}>删除选中</button>
                <button style={{display: sLen?'':'none'}} onClick={this.props.likeSelected}>收藏选中</button>
                <button style={{display: lLen?'':'none'}} onClick={this.props.removeLike}>取消选中收藏</button>
                <button 
                    style={{ display: pathName === '/' ?'':'none'}}
                    onClick={()=>{
                        this.props.history.push('/like');
                    }}
                >
                    查看收藏清单
                </button>
                <button 
                    style={{ display: pathName === '/like'?'':'none'}} 
                    onClick={() => {
                        this.props.history.push('/');
                    }}
                >
                    查看所有清单
                </button>
            </div>
         );
    }
}
 

export default Footer;
