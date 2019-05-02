import React from 'react';

const searchBox = (props) => {
    return (
        <input type="text"
            aria-label="search robots"
            value={props.value}
            onChange={props.onChangeHandler}
        />
    );
};

export default searchBox;