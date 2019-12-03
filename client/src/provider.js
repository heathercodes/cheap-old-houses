import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const HouseContext = createContext({});

export const Provider = ({children}) => {
    const [houses, setHouses] = useState({});

    const houseContext = {
        houses,
        setHouses
    };

    return <HouseContext.Provider value={houseContext}>{children}</HouseContext.Provider>;
};

export const { Consumer } = HouseContext;

Provider.propTypes = {
    children: PropTypes.element.isRequired
};
