/*jshint esversion: 6 */
import React, { Component }  from 'react';
import Table from './table';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: {
                id: 1,
                name: "Player 1",
                color: 'black'
            },
            player2: {
                id: 2,
                name: "Player 2",
                color: 'green'
            },
            turn : "player1",
            panel : [0,0,0,0,0,0,0,0,0],
            stateGame: "initial",
            winner : "NOBODY"
        };
        this.hasWin = this.hasWin.bind(this);
    }

    fixName() {
        // e.target.previousSibling.remove();
        // e.target.remove();
        this.setState({stateGame: "game"});
    }

    hasWin(playerId) {
        //HORIZONTAL
        let bool=(this.state.panel[0] == playerId && this.state.panel[1] == playerId && this.state.panel[2]==playerId);
        bool=bool || (this.state.panel[3] == playerId && this.state.panel[4] == playerId && this.state.panel[5]==playerId);
        bool=bool || (this.state.panel[6] == playerId && this.state.panel[7] == playerId && this.state.panel[8]==playerId);
        //VERTical
        bool=bool || (this.state.panel[0] == playerId && this.state.panel[3] == playerId && this.state.panel[6]==playerId);
        bool=bool || (this.state.panel[1] == playerId && this.state.panel[4] == playerId && this.state.panel[7]==playerId);
        bool=bool || (this.state.panel[2] == playerId && this.state.panel[5] == playerId && this.state.panel[8]==playerId);
        //DIAGONAl
        bool=bool || (this.state.panel[0] == playerId && this.state.panel[4] == playerId && this.state.panel[8]==playerId);
        bool=bool || (this.state.panel[2] == playerId && this.state.panel[4] == playerId && this.state.panel[6]==playerId);
        return bool;
    }

    clickHandler(id) {
        let panel,
            player = this.state.turn,
            isP1 = player === "player1";
        panel = this.state.panel;
        panel[id] = this.state[player].id;

        this.setState({
            turn : isP1 ?  "player2" : "player1",
            panel : panel ,
            winner: this.hasWin(this.state[player].id) ? this.state[player].name : "",
        });
        if (this.hasWin(this.state[player].id)) {
            this.setState({stateGame: "over"});
        }
    }

    // updateName(e) {
    //     const target = e.target;
    //     let player = {};
    //     console.log(target.id);
    //     if (target.id === 'player1'){
    //         player = this.state.player1;
    //         player.name = target.value;
    //         this.setState({"player1":player});
    //     } else {
    //         player = this.state.player2;
    //         player.name = target.value;
    //         this.setState({"player2":player});
    //     }
    // }

    render() {
        let color = this.state.turn === "player1" ? this.state.player1.color : this.state.player2.color;
        // switch (this.state.stateGame) {
        //     case "initial":
        //         return (
        //             <article className="big-box">
        //                 <div className="player-info">
        //                     <h4>{this.state.player1.name}</h4>
        //                     <input id="player1" type="text" defaultValue={this.state.player1.name} onChange={this.updateName.bind(this)} />
        //                 </div>
        //                 <div className="player-info">
        //                     <h4>{this.state.player2.name}</h4>
        //                     <input id="player2" type="text" defaultValue={this.state.player2.name} onChange={this.updateName.bind(this)} />
        //                 </div>
        //                 <button onClick={this.fixName.bind(this)}>save names</button>
        //             </article>
        //         );
        //     case "game":
        //         return (
        //             <section>
        //                 <article className="big-box">
        //                 <Table rows={3} columns={3} onClick={this.clickHandler.bind(this)} class={color} />
        //                 </article>
        //                 <article className="big-box">
        //                 <h1>{this.state.turn === "player1"?this.state.player1.name:this.state.player2.name}</h1>
        //                 </article>
        //             </section>
        //         );
        //     case "over":
        //         return (
        //             <div>
        //                 <h1>WINNER : {this.state.winner}</h1>
        //                 <button className="btn" onClick={()=>{location.reload();}}>RE-PLAY</button>
        //             </div>
        //         );
        //     default:
        //         return <h1>HA HA </h1>;
        // }

        //
        // if (this.state.winner){
        //     return (
        //         <div>
        //             <h1>WINNER : {this.state.winner}</h1>
        //             <button className="btn" onClick={()=>{location.reload();}}>RE-PLAY</button>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <section>
        //
        //
        //             <article className="big-box">
        //                 <button className="btn" onClick={()=>{location.reload();}}>RESET</button>
        //             </article>
        //         </section>
        //     );
        // }

        return (
            <section>
                <article className="big-box">
                <Table rows={3} columns={3} onClick={this.clickHandler.bind(this)} classColor={color} />
                </article>
                <article className="big-box">
                <h1>{this.state.turn === "player1"?this.state.player1.name:this.state.player2.name}</h1>
                </article>
            </section>
        );

    }
}
