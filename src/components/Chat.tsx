import ChatHeader from './ChatHeader'
import Message from './Message'

import { SendMessageIcon } from '../icons'

export default function Chat() {
    return (
        <main className="
            bg-stone-800
            rounded-md">
            <ChatHeader />

            <section className="
                flex flex-col gap-6 p-6">
                <span className="
                    text-slate-100/50 text-center">
                    Hoje 11:30
                </span>

                <Message 
                    leftOrRight="left"
                    userName="Cecília"
                    time="11:30"
                    message="Tive uma ideia incrível para um projeto! 😍" />

                <Message 
                    leftOrRight="right"
                    userName="Luca"
                    time="11:32"
                    message="#boraCodar! 🚀" />

                <footer className="
                    flex items-center justify-between px-4 py-2
                    rounded-full
                    bg-stone-700">
                    <input 
                    type="text"
                    placeholder="Digite sua mensagem"
                    className="bg-stone-700 text-slate-100" />
                    <div className="w-8">
                        {SendMessageIcon}    
                    </div>    
                </footer>               
            </section>
        </main>
    )
}