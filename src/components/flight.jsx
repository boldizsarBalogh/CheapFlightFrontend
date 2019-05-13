import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Flight= ({company , startTown, arriveTown, date, startTime ,arriveTime, confort, price}) =>
    (<tr>
        <td>{company}</td>
        <td>{startTown}</td>
        <td>{arriveTown}</td>
        <td>{date}</td>
        <td>{startTime}</td>
        <td>{arriveTime}</td>
        <td>{confort}</td>
        <td>{price}</td>
    </tr>
       );


export default Flight;

