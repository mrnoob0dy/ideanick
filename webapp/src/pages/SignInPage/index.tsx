import { zSignInTrpcInput } from '@ideanick/backend/src/router/signIn/input'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { FromItems } from '../../components/FormItems'
import { Input } from '../../components/Input/Index'
import { Segment } from '../../components/Segment'
import { trpc } from '../../lib/trpc'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getAllIdeasRoute } from '../../lib/routes'
import { useForm } from '../../lib/form'

export const SignInPage = () => {
  const navigate = useNavigate()
  const trpcUtils = trpc.useContext()
  const signIn = trpc.signIn.useMutation()
  const {formik, buttonProps, alertProps} = useForm({
    initialValues: {
      nick: '',
      password: '',
    },
    validationSchema: zSignInTrpcInput,
    onSubmit: async (values) => {
        const {token} = await signIn.mutateAsync(values)
        Cookies.set('token', token, {expires: 99999})
        void trpcUtils.invalidate()
        navigate(getAllIdeasRoute())
    },
    resetOnSuccess: false,
  })

  return (
    <Segment title="Sign In">
      <form onSubmit={formik.handleSubmit}>
        <FromItems>
          <Input label="Nick" name="nick" formik={formik} />
          <Input label="Password" name="password" type="password" formik={formik} />
          <Alert {...alertProps} />
          <Button {...buttonProps}>Sign In</Button>
        </FromItems>
      </form>
    </Segment>
  )
}