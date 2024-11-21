
"use client"

import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/src/constants"
import { FormGenerator } from "../../global/form-generator"
import { Loader } from "../../global/loader"
import { useAuthSignIn } from "@/src/hooks/authentication"

type Props = {}

const SignInForm = (props: Props) => {
  const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn()

  return (
    <form className="flex flex-col gap-3 mt-10" onSubmit={onAuthenticateUser}>
      {GROUPLE_CONSTANTS.signInForm.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          errors={errors}
        />
      ))}
      <Button type="submit" className="rounded-2xl">
        <Loader loading={isPending}>Sign In with Email</Loader>
      </Button>
    </form>
  )
}

export default SignInForm
