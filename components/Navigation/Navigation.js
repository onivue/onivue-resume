import { HiOutlineUserCircle } from 'react-icons/hi'

const Navigation = ({ className }) => {
  return (
    <nav className={className}>
      <div className="flex items-center h-full mx-auto max-w-[1900px] flex-nowrap">
        <div className="relative flex items-center justify-between w-full h-full px-8 py-2 lg:py-3">
          <div className="flex items-center">
            <img src="img/logo.png" className="w-10 "></img>
            <div className="ml-4 font-mono text-xl ">ONIVUE-RESUME</div>
          </div>
          <div className="">
            <div className="">
              {/* <HiOutlineUserCircle className="w-8 h-8 " /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
