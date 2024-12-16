```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let cleanup = () => {
      console.log('Cleanup!');
    };

    if (isActive) {
      cleanup = () => {
        console.log('Component is active, cleanup scheduled.');
      };
    } else {
      console.log('Component is unmounted. Cleanup initiated.');
    }

    return cleanup;
  }, [isActive]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setIsActive(false)}>Unmount</button>
    </div>
  );
}
export default MyComponent;
```