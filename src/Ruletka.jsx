import { useEffect, useState } from 'react'
import './style.css'
import { Component } from 'react'
import { classNames } from 'react'
function Ruletka(){
    const[LV, setLV] = useState({initialState: false})
    return(
        <div className="rulet">
            <div className="container">
                <div className="rulet-img">
                    {/* { LV && <img src="https://image.freepik.com/free-vector/wheel-of-fortune-lucky-icon-with-place-for-text_118124-750.jpg" alt="" />} */}
                    {LV && <p>kjbfjksbgijnjghdkpvhdtriojxdiuhretjwrbhddksjndtirmkg uk5jurpo2k3jri0jepiotul;jtijjoghkjnrsiojfdpognoiwjo</p>}
                </div>
                <div className="rulet-button">
                    <button onClick={() => setLV(!LV)}>{LV ? 'крутить':'остановить'}</button>
                </div>
            </div>
        </div>
    )
}
export default Ruletka