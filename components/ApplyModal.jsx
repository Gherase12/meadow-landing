import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import InputField from './InputField';

function ApplyModal({ isOpen, closeModal, type }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();


  const notify = (message) => toast.success(message);


  const IDOfields = [
    {
      name:"Project Name:",
      field: "pn",
    },
    {
      name:"Discord:",
      field: "disc",
    },
    {
      name:"Twitter:",
      field: "Twitter",
    },
    {
      name:"Telegram:",
      field: "tg",
    },
    {
      name:"What is your website link?",
      field: "web",
    },
    {
      name:"Provide the link to your pitch deck:",
      field: "pitch",
    },
    {
      name:"How much do you guys plan to raise in total?",
      field: "raise",
    },
    {
      name:"How much have you raised to this date? (Provide in USD)",
      field: "araise",
    },
    {
      name:"What is your initial market-cap?",
      field: "mc",
    },
    {
      name:"What is the vesting schedule for all rounds?",
      field: "vest",
    },
    {
      name:"Who are your competitors?",
      field: "comp",
    },
    {
      name:"Share your Team socials links:",
      field: "team",
    },
    {
      name:"What is the best way to contact you?",
      field: "contact",
    },
  ]

  const KOLfields = [
    {
      name:"Provide your Telegram:",
      field:"tg",
    },
    {
      name:"How can you help Meadow?",
      field:"how",
    },
    {
      name:"Twitter",
      field:"tw",
    },
    {
      name:"Instagram:",
      field:"ig",
    },
    {
      name:"LinkedIn",
      field:"li",
    },
    {
      name:"TikTok",
      field:"tt",
    },
    {
      name:"What else can you provide other than marketing?",
      field:"elsec",
    },
    {
      name:"Provide proof links of where you have marketed before:",
      field:"proof",
    }
   
    
  ]
//https://meadowlaunch.com
  const onSubmit = async (data, type) => {
    console.log(data)
    const typeRoute = type == "IDO" ? "addLaunch":"addKoll"

    const obj = {typeRoute,fields:data}
    // console.log(data)
    try {
      const response = await fetch('https://meadowlaunch.com/api/post', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
      });
      const message = await response.json();
      console.log(message)
      reset();
      closeModal()
      notify("Applied")
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
          <div className='flex min-h-full items-center justify-center p-4 text-center '>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-auto border-2   transform  rounded-2xl background-gradient p-6 text-left align-middle shadow-xl transition-all  flex items-center flex-col'>
                <div className="w-auto text-center text-white font-bold text-[20px]" >Apply for {type}</div>

                {
                  type == "IDO" ? (
                    <form onSubmit={handleSubmit(onSubmit)} className='w-auto'>
                    {/* Project Name*/}
                    <div className="grid lg:grid-cols-2 gap-x-[50px]">

                    {IDOfields.map(({name, field})=>(

                    <InputField name={name} field={field} register={register} errors={errors}/>
                    ))}
                    </div>
                   
  
                    <button
                      type='submit'
                      className='bg-white text-blue-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center font-bold  '
                    >
                      Submit
                    </button>
                  </form>


                  ) : (

                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                  {
                    KOLfields.map(({name, field})=>(
                      <InputField name={name} field={field} register={register} errors={errors}/>
                    ))
                  }

                  <button
                    type='submit'
                    className='bg-white text-blue-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center font-bold  '
                  >
                    Submit
                  </button>
                </form>
                  )
                }
                {/* IDO form */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ApplyModal;
