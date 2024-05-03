const Loader = () => {
    return (
      <div className="flex h-screen items-center justify-center bg-white ">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"> 
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-solid border-red-700 border-t-transparent"> </div>
        </div>
      </div>
    );
  };
  
  export default Loader;