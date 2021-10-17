import React, {Component} from 'react';
import {db} from '../firebase.js';
import MediaCard from "../components/MediaCard";
import LinearProgress from '@material-ui/core/LinearProgress';

import './style/TestimonyTV.css';

export default class TestimonyTV extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        testimony: undefined,
        progress: 0,
        testimonyPos: [0, 1, 2]
    };

    getData() {
        db.collection("TESTIMONIO")
            .onSnapshot(querySnapshot => {
                const testimony = querySnapshot.docs.map(
                    doc => doc.data()
                );
                this.setState({testimony: testimony, loading: false, error: null});
                debugger;
            });
    }


    tick() {
        if (this.state.progress === 100) {
            if (this.state.testimony !== undefined && this.state.testimony.length > 5) {
                let arrayPos = this.state.testimonyPos;
                let newArrayPos = [];
                while (newArrayPos.length < 3) {
                    let pos = Math.floor((Math.random() * this.state.testimony.length));
                    while (arrayPos.includes(pos) || newArrayPos.includes(pos)) {
                        pos = Math.floor((Math.random() * this.state.testimony.length));
                    }
                    newArrayPos.push(pos);
                }

                this.setState({
                    progress: 0,
                    testimonyPos: newArrayPos,
                })
            }

        } else {
            this.setState({progress: (this.state.progress + 5)})
        }
    }

    componentDidMount() {
        this.getData();

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {

        return (
            <div className="TestimonyTV">
                <div className="container-row">
                    <div className="space">
                        {this.state.testimony !== undefined &&
                        <MediaCard testimony={this.state.testimony[this.state.testimonyPos[0]]}/>}
                    </div>
                    <div className="space">
                        {this.state.testimony !== undefined &&
                        <MediaCard testimony={this.state.testimony[this.state.testimonyPos[1]]}/>}
                    </div>
                    <div className="space">
                        {this.state.testimony !== undefined &&
                        <MediaCard testimony={this.state.testimony[this.state.testimonyPos[2]]}/>}
                    </div>
                </div>
                <LinearProgress variant="determinate" value={this.state.progress}/>
            </div>
        );
    }
}
