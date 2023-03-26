import { useState } from "react";
import {ReactComponent as UnitedKingdom} from '../svg/United Kingdom.svg';
import {ReactComponent as Down} from '../svg/Down.svg';

export default function LangToggler() {
const [isActive, setIsActive] = useState(false);
return (
    <div className="langToggler" onClick={(e) => setIsActive(!isActive)}> 

    <div className="langIC">
    <UnitedKingdom/>
     <span>ENG</span>
     <Down className="Down"/>

    </div>
    {isActive && (
        <div className="LangList">
            <p>ENG</p>
            <p>RUS</p>
            <p>UZB</p>
        </div>
    )}
</div>
);
}