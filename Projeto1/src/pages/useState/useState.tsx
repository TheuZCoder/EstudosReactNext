import { useState } from "react";
import DisplayState from "@/components/DisplayState";

export default function useStates() {

    let [cont, setCont] = useState<number>(0);

    function contador() {
        setCont(cont++);
    }
    function subtrair() {
        setCont(cont--);
    }

    return (
        <div>
            useState
            <DisplayState valor={cont} fadicionar={contador} fsubtrair={subtrair}></DisplayState>
           
        </div>
    )
}