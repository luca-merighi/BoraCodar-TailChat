import {CloseIcon} from '../icons/index'

export default function ChatHeader() {
    return (
        <header className="
            bg-stone-700 p-6
            flex gap-20 items-center justify-between
            rounded-t-md">
            <figure className="
                flex gap-6 items-center">
                <img 
                src="https://avatars.githubusercontent.com/u/73050019?s=400&u=2d6573afd7be54d5c4aa7a346b9cf27665a35b7a&v=4" 
                alt="Foto de Perfil"
                className="w-24 rounded-full" />

                <div className="
                    flex flex-col gap-2">
                    <h3 className="
                        text-slate-100 text-xl font-bold">
                        Luca Merighi
                    </h3>
                    <p className="
                        flex gap-2 items-center
                        text-emerald-500">
                        <div className="
                        bg-emerald-500 h-3 w-3 rounded-full"></div>
                        Online
                    </p>
                </div>
            </figure>

            <button
            className="
                w-8 p-1
                rounded-md border-none
                cursor-pointer
                transition-colors
                hover:bg-stone-800/50
                focus:outline-1
                focus:outline-slate-100
                focus:bg-stone-800/50">
                {CloseIcon}    
            </button>           
        </header>
    )
}