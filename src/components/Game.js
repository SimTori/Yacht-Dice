import React from "react";
import '../styles/Game.css'
import GameBoard from "./GameBoard";
import ScoreSheet from "./ScoreSheet";
import 'semantic-ui-css/semantic.min.css'
import {Grid} from "semantic-ui-react";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="game">
                <Grid celled>
                    <Grid.Column width={5}>
                        <ScoreSheet />
                    </Grid.Column>

                    <Grid.Column width={10}>
                        <GameBoard />
                    </Grid.Column>

                </Grid>
            </div>
        )
    }
}

export default Game