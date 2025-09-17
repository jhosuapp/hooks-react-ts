import React from "react"

const ClientInformation = ():React.JSX.Element => {
    return (
        <section className="bg-grandient flex flex-col gap-4 h-svh w-full items-center justify-center bg-black">
            <h2 className="text-4xl font-thin text-white">
                Jhosua - #123
            </h2>
            <p className="text-white text-2xl">Ottawa, Canada</p>
            <p className="text-white text-2xl">Un rol</p>
        </section>
    )
}

export { ClientInformation }