import { ChatEngine } from 'react-chat-engine';


export default function Chats(){

    const parsedData = JSON.parse(sessionStorage.getItem("userData"));
    const userLogin = JSON.parse(parsedData).login;
    const userPassword = JSON.parse(parsedData).password;

return (
  <ChatEngine
    projectID="99cc6572-c465-4f5c-bfe3-7a1210c4dfd9"
    userName={userLogin}
    userSecret={userPassword}
  />
);

};