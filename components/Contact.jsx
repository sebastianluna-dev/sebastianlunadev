export const Contact = () => {
  return(
    <div id="contact" className="grid text-white text-xl max-w-md mx-auto w-full">
      <h2 className="oswald text-center text-6xl mb-8">Contact</h2>
      <label className="mb-1">Name:</label>
      <div className="border-2 border-white p-2 rounded-2xl mb-2">
        <input type="text" className="w-full bg-transparent focus:outline-none"/>
      </div>
      <label className="mb-1">Email:</label>
      <div className="border-2 border-white p-2 rounded-2xl mb-2">
        <input type="text" className="w-full bg-transparent focus:outline-none"/>
      </div>
      <label className="mb-1">Message:</label>
      <div className="border-2 border-white p-2 rounded-2xl">
        <textarea className="w-full bg-transparent focus:outline-none h-32"/>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-secondary py-2 px-3 rounded-lg text-lg font-semibold text-white">
          Send message
        </button>
      </div>
    </div>
  )
}
