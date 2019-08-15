import React from 'react';

export default function Square(props) {
        return(
            <div style={{
                width: "30px",
                height: "30px",
                border: "1px solid black",
                marginRight: "-1px",
                marginTop: "-1px",
                textAlign: "center"
            }}
                onClick={() => props.handleClick(props.number)}
            >
                {props.letter}
            </div> 
        )
}

