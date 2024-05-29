import { regexForName } from "./regex"

export const Validate = (form: any) => {
    let err: any = {}

    if (!form.name.trim()) {
        err.name = "Name is required"
    }

    else if (!regexForName.test(form.name)) {
        err.name = "Name is not valid"
    }

    if (!form.password.trim()) {
        err.password = "Password is required"
    }

    // else if (form.password.length < 5) {
    //     err.password = "Password at least 5 characters"
    // }

    return err
}
