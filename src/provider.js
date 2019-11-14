
import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const HouseContext = createContext({});

export const Provider = ({children}) => {
    const [searchCriteria, setSearchCriteria] = useState({});

    const houseContext = {
        searchCriteria,
        setSearchCriteria
    };

    return <HouseContext.Provider value={houseContext}>{children}</HouseContext.Provider>;
};

export const { Consumer } = HouseContext;

Provider.propTypes = {
    children: PropTypes.element.isRequired
};
