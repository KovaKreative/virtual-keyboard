'use client';

import VirtualKeyboard from './VirtualKeyboard';

export default function Sandbox() {

  const keyFunction = function(c) {
    const textField = document.getElementById('textBox');
    textField.focus();

    if (c === "backspace") {
      return textField.value = textField.value.slice(0, -1);
    }

    if (c === "enter") {
      return alert("Submitted!");
    }

    textField.value += c;
  };

  const backspace = function(keyEvent) {
    const textField = document.getElementById('textBox');
    textField.focus();

    textField.value = textField.value.slice(0, -1);

  };

  return (
    <div className='flex flex-col gap-4'>
      <input id='textBox' type='text' className='outline text-xl p-1' />
      <VirtualKeyboard keyFunction={keyFunction} />
    </div>
  );
}