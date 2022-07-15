import {React} from 'react';
import {ReactDOM} from 'reactdom/client';

function importNodeJS(message){
    message = "Imported NodeJS & FullStack";
    if(message != null){
        message = <input type="text" value="NodeJS"/>
        return message;
    }
    console.log("The message for implementation looks like",message);
    react.message(true);
}