import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { useRef } from 'react'
import { Fragment } from 'react'
import {IoClose} from 'react-icons/io5'

function MainModal({modalOpen, setModalOpen, children}) {
    const cancelButtonRef = useRef()
  return (
    <>
      <Transition show={modalOpen} as={Fragment} appear>
        <Dialog as="div" className="fixed inset-0 z-30 overflow-y-auto text-center" initialFocus={cancelButtonRef} onClose={()=> setModalOpen(false)}>
            <div className='min-h-screen px-4'>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-100' enterTo='opacity-100 ' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
                </Transition.Child>
                <span className='inline-block h-screen align-middle' aria-hidden="true">
                    &#8203
                </span>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-100 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo="opacity-0 scale-95">
                   {children}
                </Transition.Child>
                <div className='absolute right-5 top-5'>
                    <button onClick={()=> setModalOpen(false)} type='button' className='w-10 h-10 flex-colo text-base font-bold transitions bg-subMain text-white rounded-full hover:bg-white hover:text-subMain'>
                        <IoClose />
                    </button>
                </div>
            </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MainModal
