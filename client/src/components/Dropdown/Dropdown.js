import React, { Component } from 'react';

import M from "materialize-css";

class DropDown extends Component {

    componentDidMount() {
        let dropdowns = document.querySelectorAll('.dropdown-trigger');

        let options = {
            inDuration: 300,
        outDuration: 300,
        hover: true, // Activate on hover
        coverTrigger: false,
        };
    };

    M.DropDown.init(dropdowns, options);

}