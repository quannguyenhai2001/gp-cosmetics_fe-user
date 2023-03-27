import * as Yup from 'yup';
export const initialCreateUserValues = {
    firstName: 'a',
    lastName: 'a',
    username: 'aaaaaa',
    email: '',
    password: '11111',
    confirmPassword: '11111',
    sex: 'nam',
    phoneNumber: '11111',
    address: '1',
    age: '1'
}
export const createUserSchema = Yup.object().shape({
    firstName: Yup.string().required('Vui lòng nhập dữ liệu'),
    lastName: Yup.string().required('Vui lòng nhập dữ liệu'),
    username: Yup.string()
        .min(5, 'User name must be at least 5 characters')
        .max(15, 'User name must be at most 15 characters')
        .required('Vui lòng nhập dữ liệu'),
    email: Yup.string()
        .email('Email không hợp lệ')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Only alphabets are allowed for this field ")
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
    // age: Yup.number().required('Vui lòng nhập dữ liệu'),
})