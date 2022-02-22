import React from "react";
import PropTypes from 'prop-types';

const FirstApp = ( { greet, subtittle } ) => {

    return (
        <>
            <h1> { greet } </h1>
            <p> { subtittle }</p>
        </>

    );
}

FirstApp.propTypes = {
    greet: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtittle: 'I am a subtittle'
}


export default FirstApp;
