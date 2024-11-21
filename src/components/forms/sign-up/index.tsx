"use client";
import { Button } from "@/components/ui/button";
import { GROUPLE_CONSTANTS } from "@/src/constants";
import { useAuthSignUp } from "@/src/hooks/authentication";
import dynamic from "next/dynamic";
import { FormGenerator } from "../../global/form-generator";
import { Loader } from "../../global/loader";

type Props = {};

const OtpInput = dynamic(
  () => import("../../global/otp-input").then((component) => component.default),
  { ssr: false }
);

const SignUpForm = (props: Props) => {
  const {
    register,
    errors,
    verifying,
    creating,
    onGenerateCode,
    onInitiateUserRegistration,
    code,
    setCode,
    getValues,
  } = useAuthSignUp();

  return (
    <form
      onSubmit={onInitiateUserRegistration}
      className="flex flex-col gap-3 mt-10"
    >
      {verifying ? (
        <div className="flex justify-center mb-5">
          <OtpInput otp={code} setOtp={setCode} />
        </div>
      ) : (
        GROUPLE_CONSTANTS.signUpForm.map((field) => (
          <FormGenerator
            {...field}
            key={field.id}
            register={register}
            errors={errors}
          />
        ))
      )}

      {verifying ? (
        <Button type="submit" className="rounded-2xl">
          <Loader loading={creating}>Sign Up with Email</Loader>
        </Button>
      ) : (
        <Button
          type="button"
          className="rounded-2xl"
          onClick={() =>
            onGenerateCode(getValues("email"), getValues("password"))
          }
        >
          <Loader loading={false}>Generate Code</Loader>
        </Button>
      )}
    </form>
  );
};

export default SignUpForm;
