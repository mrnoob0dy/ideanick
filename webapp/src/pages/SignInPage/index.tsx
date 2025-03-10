import { zSignInTrpcInput } from '@ideanick/backend/src/router/signIn/input'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { useState } from 'react'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { FromItems } from '../../components/FormItems'
import { Input } from '../../components/Input/Index'
import { Segment } from '../../components/Segment'
import { trpc } from '../../lib/trpc'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getAllIdeasRoute } from '../../lib/routes'

export const SignInPage = () => {
  const navigate = useNavigate()
  const trpcUtils = trpc.useContext()
  const [submittingError, setSubmittingError] = useState<string | null>(null)
  const signIn = trpc.signIn.useMutation()
  const formik = useFormik({
    initialValues: {
      nick: '',
      password: '',
    },
    validate: withZodSchema(zSignInTrpcInput),
    onSubmit: async (values) => {
      try {
        setSubmittingError(null)
        const {token} = await signIn.mutateAsync(values)
        Cookies.set('token', token, {expires: 9999})
        void trpcUtils.invalidate()
        navigate(getAllIdeasRoute())
      } catch (err: any) {
        setSubmittingError(err.message)
      }
    },
  })

  return (
    <Segment title="Sign In">
      <form onSubmit={formik.handleSubmit}>
        <FromItems>
          <Input label="Nick" name="nick" formik={formik} />
          <Input label="Password" name="password" type="password" formik={formik} />
          {!formik.isValid && !!formik.submitCount && <Alert color="red">Some fields are invalid</Alert>}
          {submittingError && <Alert color="red">{submittingError}</Alert>}
          <Button loading={formik.isSubmitting}>Sign In</Button>
        </FromItems>
      </form>
    </Segment>
  )
}