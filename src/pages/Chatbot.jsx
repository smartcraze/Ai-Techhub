import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "botId": "757bd0da-94a6-40a4-9ca6-026b1add1ae5",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "757bd0da-94a6-40a4-9ca6-026b1add1ae5",
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot