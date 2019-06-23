import React, { Component } from 'react';
import { connect } from 'react-redux';
class Footer extends Component {
    state = {  }
    render() { 
        console.log('footer',this.props);
        
        const { data } = this.props;
        const likeData = data.filter(v=>v.if_like)
        const sLen = data.length;
        const lLen = likeData.length;
        const pathName = this.props.location.pathname; 
        return ( 
            <div className="list-footer" style={{display: data.length?'block':'none'}}>
                <button style={{display: sLen?'':'none'}} onClick={()=>{
                    this.props.dispatch({
                        type: "REMOVE_SELECTED"
                    })
                }}>删除选中</button>
                <button style={{display: sLen?'':'none'}} onClick={()=>{
                    this.props.dispatch({
                        type: "LIKE_SELECTED"
                    }) 
                }}>收藏选中</button>
                <button style={{display: lLen?'':'none'}} onClick={()=>{
                    this.props.dispatch({
                        type: 'CANCEL_SELECTED'
                    })
                }}>取消选中收藏</button>
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
 

export default connect(state=>state)(Footer);
