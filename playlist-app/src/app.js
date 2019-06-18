import React, { Component } from "react";
import Header from './view/header';
import Main from './view/main'
import Footer from './view/footer'
class App extends Component {
    state = {
        data: [],
        oldData: []
    };
    add = (title,singer) => {
        this.state.data.push({
            title: title,
            singer: singer,
            if_selected: false,
            if_like: false,
            if_delete: false
        });
        this.setState({
            data: this.state.data,
            oldData: this.state.data
        })
    }

    ifCheckAll = ()=>{
        const a = this.state.data.filter(v=>v.if_selected);
        if(a.length === this.state.data.length && a.length > 0){
            return true;
        }else {
            return false;
        }
    }

    checkInput= (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const data = this.state.data.map((item,index)=>{
            item[name] = value;
            return item;
        })
        this.setState({
            data: data,
            oldData: data
        });
    }
   
    checkInputOne = (i,event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const data = this.state.data;
        data[i][name] = value;
        this.setState({
            data: data,
            oldData: data
        });
    }

    deleteOne = (index)=>{
       const data = this.state.data.filter((v,i)=> i !== index);
       this.setState({
           data: data,
           oldData: data
       });
       return false;
    }

    removeSelected = () => {
       const data = this.state.data.filter((v, i) => !v.if_selected);
       this.setState({
           data: data,
           oldData: data
       });
    }

    likeSelected = ()=>{
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
        const data = this.state.data.map(item=>{
            if (item.if_selected) {
                item.if_like =  false;
            }
            return item;
        });
        this.setState({
            data
        });
    }
    
    lookLike = ()=>{
       const data = this.state.data.filter((v, i) => v.if_like);
       this.setState({
           data
       });
    }

    lookAll = () => {
        const data = this.state.oldData;
        this.setState({
            data
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="play-list-wrap">
                <Header addData={this.add} />
                <Main 
                    data={data}
                    ifCheckAll={this.ifCheckAll}
                    checkAll={this.checkInput}
                    checkOne={this.checkInputOne}
                    remove={this.deleteOne}
                />
                <Footer 
                    data={data}
                    removeSelected={this.removeSelected}
                    likeSelected={this.likeSelected}
                    removeLike={this.removeLike}
                    lookLike={this.lookLike}
                    lookAll={this.lookAll}
                />
            </div>
        );
    }
}

export default App;
