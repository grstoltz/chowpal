import React from "react";
import './Container.css';

// This Container component allows us to use a bootstrap container without worrying about class names
const Container = ({ fluid, children, main}) => (
    <div className={`container${fluid ? "-fluid" : "" } ${main ? "main-container" : ""} tanBackground `}>
        {children}
    </div>
);

export default Container;
