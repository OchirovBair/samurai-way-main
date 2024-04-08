import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogType = {
    name: string
    id: number
}

const dialogsData:DialogType[] = [
    {name: 'Sasha', id: 1,},
    {name: 'Misha', id: 2,},
    {name: 'Oleg', id: 3,},
    {name: 'Nasty', id: 4,},
]

export type MessageType = {
    id: number
    message: string
}

const messagesData:MessageType[] = [
    {id: 1, message: 'Hi Im Sasha',},
    {id: 2, message: 'Hi Im Misha',},
    {id: 3, message: 'Hi Im Oleg',},
    {id: 4, message: 'Hi Im Nasty',},
]

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const postsData:PostDataType[] = [
    {id: 1, message: 'How are you?', likesCount: 10},
    {id: 2, message: 'Yo?', likesCount: 21},
    {id: 2, message: 'Yo?', likesCount: 21},
    {id: 2, message: 'Yo?', likesCount: 21},
]

ReactDOM.render(<App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>, document.getElementById('root'));