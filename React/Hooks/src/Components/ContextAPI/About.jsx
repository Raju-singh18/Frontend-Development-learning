import { use,useContext } from "react";
import { BioContext, useBioContext } from ".";

export const About = () => {
  // ? using useContext
  //   const { myName, myAge } = useContext(BioContext);
  // ? using custom hook
  // const { myName, myAge } = useBioContext();
  // ? using use API
  // const { myName, myAge } = use(BioContext);


  // !for conditionally we use use API
  const newHook = true;
  let myName, myAge;
if(newHook){
     ( { myName, myAge } = use(BioContext));
}

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center
        items-center bg-gray-700 text-white`}
    >
      <h1>
        Hello Context API(About). My name is {myName}. I am {myAge} years old.
      </h1>
    </section>
  );
};
