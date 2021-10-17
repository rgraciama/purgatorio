import React from 'react';

import './style/TestimonyNew.css';
import TestimonyForm from '../components/TestimonyForm';
import MediaCard from "../components/MediaCard";
import {db} from '../firebase.js';
import {Link} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';




class TestimonyNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            name: '',
            message: '',
            vote: '',
            imageUrl: '',
        },
    };

    handleChange = e => {
        debugger;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});

        try {
            // await api.badges.create(this.state.form);
            db.collection('TESTIMONIO')
                .doc()
                .set({
                    name: this.state.form.name || "",
                    message: this.state.form.message || "",
                    vote: this.state.form.vote || "",
                    imageUrl: this.state.form.imageUrl || "",
                    time: Date.now(),
                })
                .then(() => {
                    console.log('User added!');
                });
            this.setState({loading: false});

            this.props.history.push('/testimony');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <div className="container">
                        <Link className="white" to="/Home">
                            Todos los testimonios
                        </Link>
                        {this.state.form.imageUrl!== "" &&
                        <div className="row">
                            <MediaCard testimony={this.state.form}/>
                        </div>
                            }
                        <div className="row">
                            <h1>Testimonio</h1>
                            <TestimonyForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TestimonyNew;
