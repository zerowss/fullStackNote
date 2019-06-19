import React, { Component } from 'react';
class ItemTb extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            this.props.data.map((item,index)=>{
                return (
                    <tr key={item.id} className={`${item.if_like?'org-bg':''} ${item.if_selected?'blue-bg':''}`}>
                        <td>
                            <input 
                                type="checkbox"
                                checked={item.if_selected} 
                                onChange={(e)=>{
                                    this.props.checkOne(item.id,e);
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
                                    this.props.checkOne(item.id,e);
                                    console.log('pos',this.props.data);
                                    
                                    if (!this.props.data.length) {
                                        this.props.history.push('/');
                                    }
                                }}
                                name="if_like" />
                        </td>
                        <td>
                            <button onClick={()=>{
                                this.props.remove(item.id)
                            }}>删除</button>
                        </td>
                    </tr>
                )
            })
         );
    }
}
 
export default ItemTb;
