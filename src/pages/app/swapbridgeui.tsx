import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function SwapBridgeUI() {
  const [network1Address, setNetwork1Address] = useState('');
  const [network2Address, setNetwork2Address] = useState('');

  const handleNetwork1InputChange = (event) => {
    setNetwork1Address(event.target.value);
  };

  const handleNetwork2InputChange = (event) => {
    setNetwork2Address(event.target.value);
  };

  const handleSwapButtonClick = () => {
    // Handle the swapping of assets between the two networks
  };

  return (
    <div>
      <label>
        Network 1 Address:
        <input type="text" value={network1Address} onChange={handleNetwork1InputChange} />
      </label>
      <br />
      <p>Balance: 0.1 FLOW</p>
      <br />
      <label>
        Network 2 Address:
        <input type="text" value={network2Address} onChange={handleNetwork2InputChange} />
      </label>
      <br/>
      <p>Balance: 0.0 FLOW</p>
      <br />
      <Button
      p="6"
      backgroundColor="#DEDEDE"
      fontSize="md"
      _hover={{ bgColor: "black", color: "white", boxShadow: "0 0 8px 2px red" }}
      onClick={() => {
        // signOut()
      }}
    >
      Swap
    </Button>
    </div>
  );
}

export default SwapBridgeUI;
