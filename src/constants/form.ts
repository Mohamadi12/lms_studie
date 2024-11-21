export type AuthFormProps = {
  id: string
  type: "email" | "text" | "password"
  inputType: "select" | "input"
  options?: { value: string; label: string; id: string }[]
  label?: string
  placeholder: string
  name: string
}
export const SIGN_UP_FORM: AuthFormProps[] = [
  {
    id: "sign_up_1",
    inputType: "input",
    placeholder: "First name",
    name: "firstname",
    type: "text",
  },
  {
    id: "sign_up_2",
    inputType: "input",
    placeholder: "Last name",
    name: "lastname",
    type: "text",
  },
  {
    id: "sign_up_3",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "sign_up_4",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
]

export const SIGN_IN_FORM: AuthFormProps[] = [
  {
    id: "sign_in_1",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "sign_in_2",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
]