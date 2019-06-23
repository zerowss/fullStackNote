import React, { Component } from 'react';
import { connect } from 'react-redux';
class ItemTb extends Component {
    state = { 
        
     }
    render() { 
        const data = this.props.location.pathname === '/' ? this.props.data : this.props.data.filter(v=>v.if_like);
        return ( 
            data.map((item,index)=>{
                return (
                    <tr key={item.id} className={`${item.if_like?'org-bg':''} ${item.if_selected?'blue-bg':''}`}>
                        <td>
                            <input 
                                type="checkbox"
                                checked={item.if_selected} 
                                onChange={(e)=>{
                                    this.props.dispatch({
                                        type: 'CHECK_ONE',
                                        name: 'if_selected',
                                        check: e.target.checked,
                                        id: item.id
                                    });
                                }}
                                name="if_selected"/>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.singer}</td>
                        <td>
                            <input 
                                type="checkbox" 
                                checked={item.if_like}
                                onChange={(e)=>{
                                    this.props.dispatch({
                                        type: 'CHECK_ONE',
                                        name: 'if_like',
                                        check: e.target.checked,
                                        id: item.id
                                    });
                                }}
                                name="if_like" />
                        </td>
                        <td>
                            <button onClick={()=>{
                                this.props.dispatch({
                                    type: 'REMOVE',
                                    id: item.id
                                })
                            }}>删除</button>
                        </td>
                    </tr>
                )
            })
         );
    }
}
 
export default connect()(ItemTb);
