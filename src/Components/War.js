import React, { useEffect } from 'react';

const War = () => {
  useEffect(() => {
    const selectButton = document.getElementById('selectButton');
    const myDiv = document.getElementById('myDiv');

    const selectText = (element) => {
      if (document.selection) {
   
        const range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
       
        const range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    };

    selectButton.addEventListener('click', () => {
      selectText(myDiv);
    });

    return () => {

      selectButton.removeEventListener('click', () => {
        selectText(myDiv);
      });
    };
  }, []);

  return (
    <div className="root_container">
      <button id="selectButton">Select Text</button>
      <div id="myDiv">text inside div get selected.</div>
    </div>
  );
};

export default War;
