import CustomComponent from "./components/3/CustomComponent";
import Gallery from "./components/3/Gallery";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* <CustomComponent text={"text"} /> */}
      <Gallery />
    </div>
  );
};

export default App;

// {
//   // ! 1 course
//   <div className="min-h-screen flex flex-col text-7xl">
//       <Header title="hello its props" />
//       <Main>
//         <div className="text-sky-600 italic">
//           hello im inside the main component
//         </div>
//       </Main>
//       <Footer />
//     </div>
// }

// ! course 2
// {
//   import { useState } from "react";
// import PrimaryButton from "./components/2/buttons/PrimaryButton";
// import { AiFillAndroid } from "react-icons/ai";
// import PrimaryCard from "./components/2/cards/index";

// const products = [
//   { title: "Cabbage", id: 1 },
//   { title: "Garlic", id: 2 },
//   { title: "Apple", id: 3 },
// ];

// const App = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   function handleClick(e) {
//     alert(e.target);
//   }

//   return (
//     <div className="min-h-screen bg-gray-200 flex justify-center items-center flex-col gap-20">
//       {isLoaded ? (
//         <PrimaryButton className={"text-white"}>
//           <div className="flex justify-between items-center gap-3">
//             <p>Android</p>
//             <AiFillAndroid size={50} />
//           </div>
//         </PrimaryButton>
//       ) : (
//         <p>Loading ... :)</p>
//       )}

//       <button onClick={() => setIsLoaded(!isLoaded)}>change state</button>
//       <div>
//         <ul>
//           {products.map((item, i) => (
//             <PrimaryCard id={item.id} title={item.title} key={i} />
//           ))}
//         </ul>
//       </div>

//       <div>
//         <button
//           // onClick={(e) => {
//           //   alert(e.target);
//           // }}
//           onClick={handleClick}
//         >
//           alert this message
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
// }
