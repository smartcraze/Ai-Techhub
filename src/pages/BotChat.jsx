import React, { useEffect } from "react";

function BotChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const configScript = document.createElement("script");
      configScript.src =
        "https://mediafiles.botpress.cloud/757bd0da-94a6-40a4-9ca6-026b1add1ae5/webchat/config.js";
      configScript.defer = true;
      document.body.appendChild(configScript);
    };

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return <div id="webchat" />;
}

export default BotChat;
