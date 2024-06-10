//travelling from top to bottom/ up to down => Bubbling phase //Def: starts from the target element bubbles up to the root of the DOM

//travelling from bottom to top/down to up => Capturing phase
//Def: starts from the the root of the DOM to the target element

//Bubbling
      const callOuter = (event) => {
        console.table([ //show as table
          {
            Description: "I am the outer one",
            Target: event.target,
            CurrentTarget: event.currentTarget,
          },
        ]);
      };

      const callMiddle = () => {
        console.table([
          {
            Description: "I am the Middle one",
            Target: event.target,
            CurrentTarget: event.currentTarget,
          },
        ]);
      };

      const callInner = (event) => {
        console.table([
          {
            Description: "I am the Inner one",
            Target: event.target,
            CurrentTarget: event.currentTarget,
          },
        ]);
        // event.stopPropagation(); //for stop the bubbling
      };

      //   By default is the bubbling phase
      // document.getElementById("outer").addEventListener("click", callOuter);
      // document.getElementById("middle").addEventListener("click", callMiddle);
      // document.getElementById("inner").addEventListener("click", callInner);

      // To achieve event capturing, you can use the third parameter of the addEventListener method, which specifies whether the event should be captured during the capturing phase. Setting it to true will activate the capturing phase.
       //Capturing
      document
        .getElementById("outer")
        .addEventListener("click", callOuter, true);
      document
        .getElementById("inner")
        .addEventListener("click", callInner, true);
      document
        .getElementById("middle")
        .addEventListener("click", callMiddle, true);