import React, { Component } from "react";
import Header from './view/header';
import Main from './view/main'
import Footer from './view/footer'
class App extends Component {
    state = {
        listState: true,
        data: [],
        dataIndex: 0
    };
    add = (title,singer) => {
        let ind = this.state.dataIndex;
        ind += 1;
        this.state.data.push({
            title: title,
            singer: singer,
            if_selected: false,
            if_like: false,
            if_delete: false,
            id: ind
        });
        this.setState({
            data: this.state.data,
            dataIndex: ind
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
            data: data
        });
    }
   
    checkInputOne = (i,event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const data = this.state.data;
        data.forEach(item=>{
            if(item.id === i){
                item[name] = value
            }
        });
        this.setState({
            data: data
        });
    }

    deleteOne = (id)=>{
       const data = this.state.data.filter((v,i)=> v.id !== id);
       this.setState({
           data: data
       });
       return false;
    }

    removeSelected = () => {
       const data = this.state.data.filter((v, i) => !v.if_selected);
       this.setState({
           data: data
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
    
    showList = (state) => {
        this.setState({
           listState: state
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const likeData = this.state.data.filter(v => v.if_like);
        if(!nextState.listState){
            if(!likeData.length){
                this.setState({
                    listState: true
                })
                return false;
            }
        }
        return true;
    }

    render() {
        const { data } = this.state;
        const likeData = data.filter(v=>v.if_like);

        return (
            <div className="play-list-wrap">
                <Header addData={this.add} />
                <Main 
                    data={this.state.listState?data:likeData}
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
                    listShow={this.state.listState}
                    showList={this.showList}
                />
            </div>
        );
    }
}

export default App;
