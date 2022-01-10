import { HiOutlineUserCircle } from 'react-icons/hi'

const Navigation = ({ className }) => {
  return (
    <nav className={className}>
      <div className="flex items-center h-full max-w-screen-xl mx-auto flex-nowrap">
        <div className="relative flex items-center justify-between w-full h-full px-8 py-2 lg:py-3">
          <div className="">
            <div className="font-mono text-xl font-bold">ONIVUE-RESUME</div>
          </div>
          <div className="">
            <div className="">
              <HiOutlineUserCircle className="w-8 h-8 " />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
