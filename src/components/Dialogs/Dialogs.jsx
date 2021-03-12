import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = ()=>{

    let dialogs = [
        {id:1, name: 'Homer'},
        {id:2, name: 'Bart'},
        {id:3, name: 'Marj'},
        {id:4, name: 'Lisa'},
        {id:5, name: 'Maggy'}
        ];

    let messages = [
        {id:1, message: 'Hello'},
        {id:2, message: 'SalamAleikum'},
        {id:3, message: 'Privet'},
        {id:4, message: 'Konichiva'},
        {id:5, message: 'WSup'}
    ];

    let dialogsElement = dialogs.map( d =><DialogItem name={d.name} id={d.id}/>);

    let messagesElement = messages.map( p => <Message message={p.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
};

export default Dialogs;