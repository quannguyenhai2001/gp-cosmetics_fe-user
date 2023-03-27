import * as Yup from 'yup';
export const initialCreateUserValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    sex: '',
    phoneNumber: '',
    address: '',
    age: ''
}
export const createUserSchema = Yup.object().shape({
    firstName: Yup.string().required('Vui lòng nhập dữ liệu'),
    lastName: Yup.string().required('Vui lòng nhập dữ liệu'),
    username: Yup.string()
        .min(5, 'Tên người dùng phải chứa ít nhất 5 ký tự')
        .max(15, 'Tên người dùng chứa nhiều nhất 15 ký tự')
        .required('Vui lòng nhập dữ liệu'),
    email: Yup.string()
        .email('Email không hợp lệ')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email chưa hợp lệ")
        .required('Vui lòng nhập dữ liệu'),
    password: Yup.string()
        .min(5, 'Mật khẩu phải chứa ít nhất 5 ký tự')
        .max(15, 'Mật khẩu chứa nhiều nhất 15 ký tự')
        .required('Vui lòng nhập dữ liệu'),
    confirmPassword: Yup.string()
        .oneOf(
            [Yup.ref('password'), null],
            "Mật khẩu không trùng khớp"
        )
        .required('Vui lòng nhập dữ liệu'),
    sex: Yup.string().required('Vui lòng nhập dữ liệu'),
    phoneNumber: Yup.string().required('Vui lòng nhập dữ liệu'),
    address: Yup.string().required('Vui lòng nhập dữ liệu'),
    age: Yup.number().required('Vui lòng nhập dữ liệu'),
})

export const signInValues = {
    email: '',
    password: '',
}
export const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email không hợp lệ')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email chưa hợp lệ")
        .required('Vui lòng nhập dữ liệu'),
    password: Yup.string()
        .min(5, 'Mật khẩu phải chứa ít nhất 5 ký tự')
        .max(15, 'Mật khẩu chứa nhiều nhất 15 ký tự')
        .required('Vui lòng nhập dữ liệu'),

})