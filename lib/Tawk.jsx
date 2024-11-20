'use client'
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useEffect, useRef,useState } from "react";
import { useAppDispatch,useAppSelector } from "@/store/hooks/hooks";
import { activate,diactivate } from "@/store/slices/chatSlice";
import { useDispatch } from "react-redux";
const TawkMessenger = () => {
  const [chatBoxState, setChatBoxState] = useState(false)
  const [hasChatBoxLoaded, setHasChatBoxLoaded] = useState(false)
  const dispatch = useDispatch()
  const value = useAppSelector((state)=>state.chatBox.value);
  const tawkMessengerRef = useRef();
  const onChatMaximized = () => {
    setChatBoxState(true);
    dispatch(activate())
  }
  const onChatMinimized = () => {
    setChatBoxState(false);
    dispatch(diactivate())
  }
  useEffect(()=>{
    if(value == true && hasChatBoxLoaded){
      tawkMessengerRef.current.maximize();
    }
  },[value,hasChatBoxLoaded])
  
  const onLoad = () => {
    setHasChatBoxLoaded(true);
  };
  return (
    <div>
      {/* Other content */}
      <TawkMessengerReact
        propertyId="6733fc482480f5b4f59cdc9d"
        widgetId="1ichh2vcr"
        onLoad={onLoad}
        ref={tawkMessengerRef}
        onChatMaximized={onChatMaximized}
        onChatMinimized={onChatMinimized}
      />
    </div>
  );

};

export default TawkMessenger;