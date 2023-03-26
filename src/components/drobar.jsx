import { useState } from "react";
import {ReactComponent as Progress} from '../svg/progress.svg';
import {ReactComponent as ArrowUp} from '../svg/arrow_up.svg';

export default function Dropdown() {
const [isActive, setIsActive] = useState(false);
return (
    <div className="Dropdown" onClick={(e) => setIsActive(!isActive)}>
        <div className="myProgress">
        <Progress/> 
        <span>My Progress</span>
        <ArrowUp/>   
        </div>

    {isActive && (
<div className="progressContent">
    <p>Results</p>
    <p>Fails</p>
</div>
    )}
</div>
);
}
