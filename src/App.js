import {useState} from "react";
import {Knopf} from "./Knopf";

// Komponenten:

// counter

// buttons

export default function App() {
    const [count, setCount] = useState(0);
    const [zähle, setZähle] = useState([0, 0]);

    const plus = () => {
        setCount(parseInt(count) + 1);
        zähle[0]++;
        setZähle(zähle);
    };

    const minus = () => {
        setCount(parseInt(count) - 1);
        zähle[1]++;
        setZähle(zähle);
    };

    return (
        <div className="App">
            <h1>Peters Counter</h1>
            <p>todo komponenten: eine Komponente für Buttons</p>
            <Knopf wert={count} klick={plus}>
                +
            </Knopf>
            <b>{count}</b>
            <Knopf wert={count} klick={minus}>-</Knopf>
            <br/>
            plus gedrückt: {zähle[0]}
            <br/>
            minus gedrückt: {zähle[1]}
        </div>
    );
}
