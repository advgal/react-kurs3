export function Knopf(props) {
    return(
        <button /*disabled={props.wert<1}*/
                onClick={props.klick}
                type="button">{props.children}</button>
    )
}
