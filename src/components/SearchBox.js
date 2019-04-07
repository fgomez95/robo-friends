import React from 'react';

const searchBox = (props) => {
    return(
        <input type="text" 
        value={props.value} 
        onChange={props.onChangeHandler}
        />
        );
};

export default searchBox;