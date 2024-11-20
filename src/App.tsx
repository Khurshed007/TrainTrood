import React from 'react';
import { Input } from './shared/ui/input';

function App() {
  return (
    <div className="flex items-center justify-center w-1/2 h-screen mx-auto border border-gray-300">
      <div className="flex flex-col items-center justify-center w-full max-w-sm p-4 bg-white border border-gray-200 shadow-md rounded">
        <Input placeholder="asdasd" />
      </div>
    </div>
  );
}

export default App;