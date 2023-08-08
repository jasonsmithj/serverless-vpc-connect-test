import React from 'react';
import axios from "axios";

type IPAddress = {
    origin: string;
}


async function getIPAddress(): Promise<IPAddress> {
    const response = await axios
        .get<IPAddress>(
            "https://httpbin.org/ip",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            }
        );
    return response.data;
}

function App() {
  const [ipAddress, setIPAddress] = React.useState<IPAddress | null>(null);

    React.useEffect(() => {
        (async () => {
            const ipAddress = await getIPAddress();
            setIPAddress(ipAddress);
        })();
    }, []);



  return (
      <div>
        {ipAddress?.origin}
      </div>
  );
}

export default App;
