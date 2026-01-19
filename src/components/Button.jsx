import React from 'react'

function Button({ text, background, border, color, href }) {
    return (
        <a href={href} className={`${background} ${border} ${color} w-full p-1 text-center rounded font-semibold`}>{text}</a>
    )
}

export default Button