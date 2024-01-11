import { Field, Form, Formik } from "formik";
import React from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import './index.scss'
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Min 1 characters!')
        .max(50, 'Max 50 characters !')
        .required('Name is required'),
   
    message: Yup.string()
        .required(' Image is required')
       

});
const AddFormik = () => {
    const showSweetAlert = (values) => {
        console.log('Submitting form:', values);
        Swal.fire({
            icon: 'success',
            showCancelButton: false,

        });
    };

    return (
        <Formik
            initialValues={{ name: '', price:'', Image: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    showSweetAlert(values);
                    setSubmitting(false);
                    resetForm();
                }, 300);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="ContactPage">
                        
                                  
                            <div className="RowContact">
                                <div className="row1">
                                    <div className="col-12 col-md-12 col-lg-4"><div className="from-group"><Field name="name" type="text" placeholder="name*" />{errors.name && touched.name ? (
                                        <div style={{ color: 'red', fontSize: "18px" }}>{errors.name}</div>
                                    ) : null}</div></div>
                                   
                                    <div className="col-12 col-md-12 col-lg-4"><div className="from-group"><Field name="number" type="tel" placeholder="price*" />{errors.number && touched.number ? (
                                        <div style={{ color: 'red', fontSize: "18px" }}>{errors.number}</div>
                                    ) : null}</div></div>

                                </div>
                                <div className="row2">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="from-message"><Field name="image" type="text" placeholder="image" />{errors.message && touched.message ? (
                                            <div style={{ color: 'red', fontSize: "18px" }}>{errors.message}</div>
                                        ) : null}</div></div> </div>

                                <div className='butt'>
                                    <div className='btn'>
                                        <button type="submit" className='submitt' >
                                            Send

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </Form>
            )}
        </Formik>
    )
}

export default AddFormik