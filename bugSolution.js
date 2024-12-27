```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logCount = () => {
      console.log('Count updated:', count);
    };
    logCount(); // Log immediately after count change.

    // Cleanup function is not needed here because there is no long-lasting side effects
    // return () => {
    //   // Cleanup code here if needed
    // };
  }, [count]); // Only run when 'count' changes

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```