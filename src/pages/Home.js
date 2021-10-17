import React, {Component} from 'react';
import {db} from '../firebase.js';
import MediaCard from "../components/MediaCard";
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import './style/Home.css';

export default class Home extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        testimony: undefined,
        hell: 0,
        heaven: 0,
    };

    getData() {
        db.collection("TESTIMONIO")
            .onSnapshot(querySnapshot => {
                const testimony = querySnapshot.docs.map(
                    doc => doc.data()
                );
                this.setState({
                    testimony: testimony,
                    loading: false, error: null,
                    hell: this.countVotes(testimony, "hell"),
                    heaven: this.countVotes(testimony, "heaven"),
                });
            });
    }

    countVotes(array, place) {
        var count = 0;
        array.map(testimony => {
            if (testimony.vote === place) {
                count++;
            }
        });

        return count;
    }

    componentDidMount() {
        this.getData();

    }

    componentWillUnmount() {
        // clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});

        try {
            // const data = await api.Hideout.list();
            const data = {};
            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };

    render() {

        return (
            <div className="Home-home">
                <div className="container-home">
                    <div className="total-home">
                        <Paper className="hell-paper" elevation={3}>{this.state.hell}</Paper>
                        <Paper className="heaven-paper" elevation={3}>{this.state.heaven}</Paper>
                    </div>
                    <div className="new-testimony-home">
                        <Link to="/testimony/new" className="btn btn-primary">
                            Añade testimonio
                        </Link>
                    </div>
                    <div className="container-row-home">
                        {
                            this.state.testimony !== undefined && this.state.testimony.map(
                                (testimony, i) =>
                                    <MediaCard key={i} testimony={testimony}/>
                            )
                        }
                    </div>
                </div>
            </div>)
    }
}
