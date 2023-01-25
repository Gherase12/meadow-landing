import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {MdOutlineClose} from 'react-icons/md';

import InputField from "./InputField";
function ApplyModal({ isOpen, closeModal, type }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const notify = (message) => toast.success(message);
  console.log(errors)

  const IDOfields = [
    {
      name: "Project Name:",
      field: "pn",
      type:"text"
    },
    {
      name: "Discord (link):",
      field: "disc",
      type:"url"
    },
    {
      name: "Twitter (link):",
      field: "Twitter",
      type:"url"
    },
    {
      name: "Telegram (link):",
      field: "tg",
      type:"url"
    },
    {
      name: "What is your website link?",
      field: "web",
      type:"text"
    },
    {
      name: "Provide the link to your pitch deck:",
      field: "pitch",
      type:"text"
    },
    {
      name: "How much do you guys plan to raise in total?",
      field: "raise",
      type:"text"
    },
    {
      name: "How much have you raised to this date? (Provide in USD)",
      field: "araise",
      type:"number"
    },
    {
      name: "What is your initial market-cap?",
      field: "mc",
      type:"number"
    },
    {
      name: "What is the vesting schedule for all rounds?",
      field: "vest",
      type:"text"
    },
    {
      name: "Who are your competitors?",
      field: "comp",
      type:"text"
    },
    {
      name: "Share your Team socials links:",
      field: "team",
      type:"url"
    },
    {
      name: "What is the best way to contact you?",
      field: "contact",
      type:"text"
    },
  ];

  const KOLfields = [
    {
      name: "Provide your Telegram:",
      field: "tg",
      type:"url"
    },
    {
      name: "How can you help Meadow?",
      field: "how",
      type:"text"
    },
    {
      name: "Twitter (link):",
      field: "tw",
      type:"url"
    },
    {
      name: "Instagram (link):",
      field: "ig",
      type:"url"
    },
    {
      name: "LinkedIn (link):",
      field: "li",
      type:"url"
    },
    {
      name: "TikTok (link):",
      field: "tt",
      type:"url"
    },
    {
      name: "What else can you provide other than marketing?",
      field: "elsec",
      type:"text"
    },
    {
      name: "Provide proof links of where you have marketed before:",
      field: "proof",
      type:"url"
    },
    {
      name: "Have you worked with anyone in the past?",
      field: "proof",
      type:"text"
    }
  ];
  
  const onSubmit = async (data) => {
    
    const typeRoute = type == "IDO" ? "addIDO" : "addKOL";

    //https://meadowlaunch.com
    
    try {
      const response = await fetch(`https://meadowlaunch.com/api/${typeRoute}`, {
        method: "POST",
        body: JSON.stringify({data}),
        headers: { "Content-Type": "application/json" },
      });
      const message = await response.json();
      
      reset();
      closeModal();
      notify(message.message);
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
              <Dialog.Panel className='w-auto border-2 relative   transform  rounded-2xl background-gradient p-6 text-left align-middle shadow-xl transition-all  flex items-center flex-col'>
                <MdOutlineClose  onClick={()=>closeModal()} className="absolute top-[20px]  right-[20px] text-white  md:text-[20px] cursor-pointer " />
                <div className='w-auto text-center text-white font-bold text-[20px] mb-[30px]'>
                  Apply for {type}
                </div>

                {type == "IDO" ? (
                  <form onSubmit={handleSubmit(onSubmit)} className='w-auto'>
                    {/* Project Name*/}
                    <div className='grid lg:grid-cols-2 gap-x-[50px]'>
                      {IDOfields.map(({ name, field, type }, i) => (
                        <InputField
                        type={type}
                          key={i}
                          name={name}
                          field={field}
                          register={register}
                          errors={errors}
                        />
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
                    <div className="grid lg:grid-cols-2 gap-x-[50px]" >

                    {KOLfields.map(({ name, field ,type}, i) => (
                      <InputField
                        key={i}
                        type={type}
                        name={name}
                        field={field}
                        register={register}
                        errors={errors}
                      />
                    ))}
                    </div>

                    <button
                      type='submit'
                      className='bg-white text-blue-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center font-bold  '
                    >
                      Submit
                    </button>
                  </form>
                )}
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
