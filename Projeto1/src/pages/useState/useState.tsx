import { useState } from "react";
import DisplayState from "@/components/DisplayState";

export default function useStates() {

    let [cont, setCont] = useState<number>(0);

    return (
        <div>
            useState
            <DisplayState valor={cont} fstate={setCont}></DisplayState>
        </div>
    )
}