import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand fs-3" href="index">Start Bootstrap</a>
                        <button className="navbar-toggler d-lg-none text-white border-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="index" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
