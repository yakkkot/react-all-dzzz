import React from 'react';
import {useForm} from "react-hook-form";
import {commentServices} from "../../Services";

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm({mode: 'all'});

    const addPost = async (comm)=>{
        const {data} = await commentServices.create(comm);
        setComments(prev => [...prev, data]);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(addPost)}
              className='my-2 mx-2 flex items-center gap-4 bg-gray-400 text-purple-50 border-2 py-2 px-6 border-gray-900 rounded-xl'>
            <div className='flex items-center gap-5'>
                <div className='flex flex-col gap-2'>
                    <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                           placeholder={'Name'} {...register('name', {
                        required: true,
                        minLength: {value: 5, message: 'Мінімум 5 символів'}
                    })}/>
                    {errors.name && <span className='text-red-700'>{errors.name.message}</span>}
                </div>

                <div className='flex flex-col gap-2'>
                    <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                           placeholder={'Body'} {...register('body', {
                        required: true,
                        minLength: {value: 10, message: 'Мінімум 10 символів'}
                    })}/>
                    {errors.body && <span className='text-red-700'>{errors.body.message}</span>}
                </div>
            </div>


            <button disabled={!isValid}
                    className='bg-gray-400 text-purple-50 border-2 py-0.5 px-6 border-gray-900 rounded-xl'>Add comment
            </button>
        </form>
    );
};

export {CommentForm}