import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from "./form";
import { LANDING_PAGE_MENU, MenuProps } from "./menu";

type GroupleConstantsProps = {
  landingPageMenu: MenuProps[]
  signUpForm: AuthFormProps[]
  signInForm: AuthFormProps[]
  // groupList: GroupListProps[]
  // createGroupPlaceholder: CreateGroupPlaceholderProps[]
  // groupPageMenu: GroupMenuProps[]
}

export const GROUPLE_CONSTANTS: GroupleConstantsProps = {
    landingPageMenu: LANDING_PAGE_MENU,
    signUpForm: SIGN_UP_FORM,
    signInForm: SIGN_IN_FORM,
    // groupList: GROUP_LIST,
    // createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
    // groupPageMenu: GROUP_PAGE_MENU,
  }