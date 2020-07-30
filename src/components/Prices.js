import React from "react";

class Prices extends React.Component
{
    render()
    {
        return (
            <>
            <h2>Prices</h2>
            <p> Here are our prices:</p>
            <ul>
                <li>Service A: $10</li>
                <li>Service B: $15</li>
                <li>Service C: $20</li>
            </ul>
            </>
        );
    }
}

export default Prices;