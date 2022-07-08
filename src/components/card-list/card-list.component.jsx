import { Card } from "../card/card.component";

import "./card-list.styles.css";


export const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map(monster => 
            <Card monster={monster} key={monster.id} />
        )}
    </div>
);