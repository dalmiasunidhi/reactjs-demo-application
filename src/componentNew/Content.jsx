import React, {Component} from 'react';
import  './Content.css';


export default class Content extends Component{
    

    constructor(props){
        super(props);
        this.state= {
            countRoom: 0,
            countAdult: 0,
            countChild:0
        };

        this.IncrementRoom = this.IncrementRoom.bind(this);
        this.DecrementRoom = this.DecrementRoom.bind(this);

        this.IncrementAdult = this.IncrementAdult.bind(this);       
        this.DecrementAdult = this.DecrementAdult.bind(this);

        this.IncrementChildren = this.IncrementChildren.bind(this);
        this.DecrementChildren = this.DecrementChildren.bind(this);
        
    }


    IncrementRoom() {
        if(this.state.countRoom >= 0 && this.state.countRoom <= 4){
            this.setState({
                countRoom: this.state.countRoom +1
            });
      }
    }

    DecrementRoom() {

            this.setState({
                countRoom: this.state.countRoom -1
            });

    }


    IncrementAdult(){
        this.setState({
            countAdult: this.state.countAdult +1
        });
    }

    DecrementAdult() {
        this.setState({
            countAdult: this.state.countAdult -1
        });
    }


    IncrementChildren() {
        this.setState({
            countChild: this.state.countChild +1
        });
    }

    DecrementChildren() {
        this.setState({
            countChild: this.state.countChild-1
        });
    }



    render() {

        if(this.state.countAdult + this.state.countChild > this.state.countRoom*4){
           this.state.countChild = (this.state.countRoom*4) - this.state.countAdult;
           if(this.state.countChild <0){
                 this.state.countAdult = this.state.countAdult + this.state.countChild;
                 this.state.countChild = 0;
               
           }
        }

        if(this.state.countRoom == 0){
            this.setState.countAdult = 0;
            this.state.countChild = 0;
        }

        return(
            <div className="main">
                <div className="div1">
                    <div className="room">ROOM</div>
                    <div>
                    <button className="btn btn-success"
                        disabled={this.state.countRoom === 5} 
                        onClick={this.IncrementRoom}
                    >
                    +
                    </button>
                    <span id="c1">{this.state.countRoom}</span>
                    <button className="btn btn-danger" disabled={!this.state.countRoom} onClick={this.DecrementRoom} >-</button>
                    </div>
                 </div>

                     

                 <div className="div2">
                   
                    <div className="adult">ADULT</div>
                    <div>
                    <button className="btn btn-success"
                        disabled={this.state.countAdult >= ((this.state.countRoom * 4)- this.state.countChild) } 
                        onClick={this.IncrementAdult}
                     >
                    +
                    </button>
                    <span id="c2">{this.state.countAdult}</span>
                    <button className="btn btn-danger" disabled={!this.state.countAdult} onClick={this.DecrementAdult}>-</button>
                    </div>
                </div>


            <div className="div3">
                <div className="children">CHILDREN</div>
                <div>
                <button className="btn btn-success"
                    disabled={this.state.countChild >= ((this.state.countRoom * 4)- this.state.countAdult)}  
                    onClick={this.IncrementChildren}
                >
                +
                </button>
                <span id="c3">{this.state.countChild}</span>
                <button className="btn btn-danger" disabled={!this.state.countChild} onClick={this.DecrementChildren} >-</button>
                </div>
            </div>
               
                
              
            </div>
        
        )
            
    }
}