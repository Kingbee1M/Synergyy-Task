"use client"

type footProps = {
    name : string,
    email : string,
    picture: string
}
export default function Fotter ({name, email, picture}: footProps) {
    return (
        <div className="w-full flex flex-row justify-between items-center gap-0 text-sm">
                <div className="w-6 h-6 rounded-full border-solid border border-bordercolor p-5 flex justify-center items-center font-bold relative">{picture}<img src="/assets/Avatar online indicator.svg" className="absolute bottom-0 right-0" /></div>
                <div>
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            <div>
                <button className="border-none"><img src="/assets/logout-02.svg" alt="log Out" width={20} height={20} /></button>
            </div>
        </div>
    )
}