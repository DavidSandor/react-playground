import React, { Component } from 'react';
import AppTile from '../../Components/AppTile/AppTile';
import App1 from '../../Apps/App1/App1';
import App2 from '../../Apps/App2/App2';
import Button from '../../GUI/Button/Button';
import {BUTTON} from '../../GUI/Button/Button';
import FAIcon from '../../GUI/FAIcon/FAIcon';

class PlayGroundArea extends Component {

    apps = [
        {id: 1, title: 'FirstApp', color: 'red', content: <App1/>},
        {id: 2, title: 'SecondApp', color: 'green', content: <App2/>}
    ]

    state = {
        currentApp: null
    }

    appTileClickHandler = (id) => {
        this.setState({
            currentApp: this.apps.find((app) => app.id === id)
        })
    }

    backButtonClickHandler = () => {
        this.setState({
            currentApp: null
        })
    }

    render() {

        const appTiles = this.apps.map((app) => 
            <AppTile 
            key={app.id} 
            color={app.color} 
            title={app.title} 
            clickHandler={() => this.appTileClickHandler(app.id)}/>
        )

        const mainAreaContent = this.state.currentApp ? this.state.currentApp.content : appTiles;

        const backButton = this.state.currentApp ? <Button type={BUTTON.SECONDARY} click={this.backButtonClickHandler}><FAIcon type='arrow-left'/></Button> : null;

        return(
            <div style={{padding: '10px'}}>
                {backButton}
                {mainAreaContent}
            </div>
        )
    }
}

export default PlayGroundArea;