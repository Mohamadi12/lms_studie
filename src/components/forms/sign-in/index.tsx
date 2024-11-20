"use client"

import { Button } from '@/components/ui/button'
import { GROUPLE_CONSTANTS } from '@/src/constants'
import { useAuthSignIn } from '@/src/hooks/authentication'
import React from 'react'
import { FormGenerator } from '../../global/form-generator'
import { Loader } from '../../global/loader'

type Props = {}

const SignInForm = (props: Props) => {
    const {isPending, onAuthenticateUser, register, errors} = useAuthSignIn()
  return (
    <form className='flex flex-col gap-3 mt-10' onSubmit={onAuthenticateUser}>
        {GROUPLE_CONSTANTS.signInForm.map((field) =>(
            <FormGenerator
                   {...field}
                   key={field.id}
                   register={register}
                   errors={errors}
            />
        ))}
        <Button type='submit' className='rounded-2xl'>
            <Loader loading={isPending}>Sign In with Email</Loader>
        </Button>
    </form>
  )
}

export default SignInForm