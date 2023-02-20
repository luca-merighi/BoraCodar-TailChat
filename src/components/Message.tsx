interface MessageProps {
    leftOrRight: 'left' | 'right'
    userName: string,
    time: string,
    message: string
}

export default function Message(props: MessageProps) {
    return (
        <div className={`
            ${props.leftOrRight == 'left' ? 'items-start' : 'items-end'}
            flex flex-col gap-2
        `}>
            <span className="
                text-slate-100">
                    {props.userName} - {props.time}
            </span>
            <p className={`
                ${props.leftOrRight == 'left' 
                ? 'bg-emerald-500 text-left rounded-tr-md' 
                : 'bg-sky-500 text-right rounded-tl-md'}
                p-4 w-1/2
                rounded-b-md
                text-slate-100
            `}>
                {props.message}
            </p>
        </div>
    )
}