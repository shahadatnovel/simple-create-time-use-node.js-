import React from 'react';
import ReactDOM from 'react-dom';


const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <h1>{ dateName + "/" + monthName + "/" + currentYear }</h1>
    
    </div>
);