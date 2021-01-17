import { useState, useCallback } from 'react';

export const useInputText = (textInput: string) => {
  const [text, setText] = useState(textInput);
  return { text, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value) };
};
