
const ChangelogBar = (props) => {
  return (
    <div className="flex justify-center items-center w-full h-auto">
        <p className="flex-1 text-right text-gray-400 p-4">{ props.date || "September 4, 2002" }</p>
        
        <div className="relative flex h-15 justify-center items-center">
          <div className="absolute w-0.5 h-full bg-black"></div>
          <div className="w-4 h-4 rounded-full bg-gray-900 z-10"></div>
        </div>
        <p className="flex-2 p-4">{ props.info || "Updated the system to the latest technologies" }</p>
    </div>
  )
}

export default ChangelogBar