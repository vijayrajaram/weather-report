import React from "react";
import ReactDom from "react-dom";

// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=4941f7dfc07be74f5cea37e02e9a53a0

const render = () => {
    ReactDom.render(<div>Hello World</div>, document.getElementById("root"));
};

render();
