import Main from "../components/layout/Main"
import type { NextPage } from "next"
import Head from "next/head"
import * as Yup from 'yup';
import { Formik, Form, FormikValues } from "formik"
import TextField from "../components/formik/TextField"
import ButtonSubmit from "../components/formik/ButtonSubmit";
import { useMutation } from "react-query"
import { Api } from "../lib/Api";
import Router from "next/router";

let schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

type Props = {

}

const initFormikValue = {
    email: process.env.IS_PRODUCTION === undefined ? '' : 'jihanlugas2@gmail.com',
    password: process.env.IS_PRODUCTION === undefined ? '' : '123456',
}


const Signin: NextPage<Props> = ({ }) => {

    const { mutate, isLoading, error } = useMutation((values: FormikValues) => Api.post("/signin", values))

    const handleSubmit = (values: FormikValues) => {
        mutate(values, {
            onSuccess: (res) => {
                console.log("res => ", res)
            }
        })
    }

    return (
        <Main>
            <Head>
                <title>Signin</title>
            </Head>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-md p-4">
                    <div className="mt-20 bg-white rounded-xl p-4 shadow-lg my-auto">
                        <Formik
                            initialValues={initFormikValue}
                            validationSchema={schema}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}
                        >
                            {() => {
                                return (
                                    <Form>
                                        <div className={"text-xl flex justify-center"}>
                                            <div>Sign In</div>
                                        </div>
                                        <div className="mb-4">
                                            <TextField
                                                label={"Email"}
                                                name={"email"}
                                                type={"email"}
                                                placeholder={"Email"}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <TextField
                                                label={"Passord"}
                                                name={"password"}
                                                type={"password"}
                                                placeholder={"********"}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <ButtonSubmit
                                                label={"Signin"}
                                                loading={isLoading}
                                                disabled={isLoading}
                                            />
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Signin
