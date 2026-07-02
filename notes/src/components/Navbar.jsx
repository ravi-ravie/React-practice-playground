import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-amber-500 '>

        <div className="flex">
            <img className='bg-[#4371e2] size-11  rounded-2xl'  src="https://cdn.prod.website-files.com/65e735ea45477cd828053bf6/660049ec96b8dc6eecf9bd87_Asset%2027.png" alt="" />
            <h1>Notely</h1>
        </div>

        <div className="rightnav">0 Notes</div>

    </div>
  )
}

export default Navbar