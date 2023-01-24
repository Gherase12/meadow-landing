import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function ApplyModal({ isOpen, closeModal }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await response.json();
      reset();
      closeModal()
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl background-gradient p-6 text-left align-middle shadow-xl transition-all  flex items-center flex-col'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                  {/* first name */}
                  <div className='mb-6'>
                    <label
                      for='base-input'
                      className='block mb-2 text-sm  text-white font-bold '
                    >
                      First name
                    </label>
                    <input
                      type='text'
                      id='base-input'
                      {...register("firstName", {
                        required: true,
                        maxLength: 20,
                      })}
                      className='bg-gray-50 border border-gray-300 text-blue-600 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    />
                    {errors.firstName && (
                      <div className='text-red-500 font-bold'>Requiered!</div>
                    )}
                  </div>
                  {/* last name */}
                  <div className='mb-6'>
                    <label
                      for='base-input'
                      className='block mb-2 text-sm  text-white font-bold '
                    >
                      Last name
                    </label>
                    <input
                      type='text'
                      id='base-input'
                      {...register("lastName", {
                        required: true,
                        maxLength: 20,
                      })}
                      className='bg-gray-50 border border-gray-300 text-blue-600 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    />
                    {errors.lastName && (
                      <div className='text-red-500 font-bold'>Requiered!</div>
                    )}
                  </div>

                  {/*  */}
                  <div className='mb-6'>
                    <label
                      for='email'
                      className='block mb-2 text-sm  text-white  font-bold '
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      id='email'
                      className=' border border-gray-300 text-blue-600 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                      {...register("mail", {
                        required: "Email Address is required",
                      })}
                      required
                    />
                    {errors.email && (
                      <div className='text-red-500 font-bold'>Requiered!</div>
                    )}
                  </div>
                  {/* motivation */}
                  <div className='mb-6'>
                    <label
                      for='message'
                      className='block mb-2 text-sm  text-white font-bold '
                    >
                      Why you chose Meadow?
                    </label>
                    <textarea
                      id='message'
                      rows='4'
                      className='block p-2.5 w-full text-sm text-blue-600 font-bold bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
                      placeholder='Leave a comment...'
                      {...register("motivation", { required: true })}
                    ></textarea>
                    {errors.motivation && (
                      <div className='text-red-500 font-bold'>Requiered!</div>
                    )}
                  </div>

                  <button
                    type='submit'
                    className='bg-white text-blue-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center font-bold  '
                  >
                    Submit
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ApplyModal;
