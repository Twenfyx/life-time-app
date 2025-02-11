function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">
          ⏳ How Much Time Do You Have 
          <span className="text-red-700"> Left?</span>
        </h1>
        <input
          className="bg-white text-black h-12 w-64 rounded-lg px-4"
          type="date" placeholder="fdsa"
        />
        <button className="bg-red-700 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-red-900 transition-colors">
          Check
        </button>
      </div>
    </>
  );
}

export default Home;
