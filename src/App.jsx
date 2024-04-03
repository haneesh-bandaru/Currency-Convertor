import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div className="h-[50rem] w-full bg-black dark:bg-white  bg-grid-white/[0.2] dark:bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
