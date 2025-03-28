import { zSignUpTrpcInput } from '@ideanick/backend/src/router/signUp/input'
import { z } from 'zod'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { FromItems } from '../../components/FormItems'
import { Input } from '../../components/Input/Index'
import { Segment } from '../../components/Segment'
import { trpc } from '../../lib/trpc'
import Cookies from 'js-cookie'
import { useForm } from '../../lib/form'
import { withPageWrapper } from '../../lib/pageWrapper'

export const SignUpPage = withPageWrapper({
  redirectAuthorized: true,
})(() => {
  const trpcUtils = trpc.useContext()
  const signUp = trpc.signUp.useMutation()
  const {formik, buttonProps, alertProps} = useForm({
    initialValues: {
      nick: '',
      password: '',
      passwordAgain: '',
    },
    validationSchema:
      zSignUpTrpcInput
        .extend({
          passwordAgain: z.string().min(1),
        })
        .superRefine((val, ctx) => {
          if (val.password !== val.passwordAgain) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Passwords must be the same',
              path: ['passwordAgain'],
            })
          }
        }),
    onSubmit: async (values) => {
        const {token} = await signUp.mutateAsync(values)
        Cookies.set('token', token, {expires: 9999})
        void trpcUtils.invalidate()
    },
    resetOnSuccess: false,
  })

  return (
    <Segment title="Sign Up">
      <form onSubmit={formik.handleSubmit}>
        <FromItems>
          <Input label="Nick" name="nick" formik={formik} />
          <Input label="Password" name="password" type="password" formik={formik} />
          <Input label="Password again" name="passwordAgain" type="password" formik={formik} />
          <Alert {...alertProps} />
          <Button {...buttonProps}>Sign Up</Button>
        </FromItems>
      </form>
    </Segment>
  )
})