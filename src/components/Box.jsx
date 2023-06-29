import React, { useState } from 'react'

const Box = () => {
    const [color, setColor] = useState("");
    const [multipleColors, setMultipleColors] = useState([]);

    const createColor = (e) => {
        e.preventDefault();

        setMultipleColors([...multipleColors, color]);
        setColor("");
    }



    return (
        <div>
            <form className="flex items-center gap-12 p-8 justify-center" onSubmit={createColor}>
                <div>
                    <label className="text-2xl font-bold " htmlFor="color">Color: </label>
                    <input className='text-lg px-4 shadow-md w-80 h-14 bg-slate-50 rounded-md border-solid border-2 border-indigo-100'
                        type="text"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>

                <input type="submit" value="Add" className="p-5 rounded-lg bg-stone-200 shadow-md" />
            </form>
            <div className="styling">
                {multipleColors.map((color, index) =>
                    <p key={index} style={{ backgroundColor: color, height: "100px", width: "100px" }} >  </p>
                )
                }
            </div>
        </div>
    )
}

export default Box