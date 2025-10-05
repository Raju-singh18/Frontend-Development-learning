export const ParentComponent = () => {
  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center
        items-center bg-gray-700 text-white`}
    >
      <h1>Component A</h1>
      <ChildComponent data="REACT JS"/>
    </section>
  );
};

const ChildComponent = (props) => {
    return (
        <>
         <h1>Hello, I am component B</h1>
         <GrandChildComponent data={props.data}  />
        </>
    )
}

const GrandChildComponent = (props) => {
    return (
        <>
         <h1>Hello, I am component c</h1>
         <GrandGrandChildComponent data={props.data}  />
        </>
    )
}

const GrandGrandChildComponent = (props) => {
    return (
        <>
         <h1>Hello, I am learning {props.data}</h1>
        </>
    )
}
