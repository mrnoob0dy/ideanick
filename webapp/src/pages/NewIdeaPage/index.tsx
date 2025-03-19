import { Segment } from '../../components/Segment'
import css from './index.module.scss'
import { Input } from '../../components/Input/Index'
import { Textarea } from '../../components/Textarea'
import { trpc } from '../../lib/trpc'
import { zCreateIdeaTrpcInput } from '@ideanick/backend/src/router/createIdea/input'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { FromItems } from '../../components/FormItems'
import { useForm } from '../../lib/form'

export const NewIdeaPage = () => {
    const createIdea = trpc.createIdea.useMutation()
    const {formik, buttonProps, alertProps} = useForm({
        initialValues: {
            name: '',
            nick: '',
            description: '',
            text: '',
        },
        validationSchema: zCreateIdeaTrpcInput,
        onSubmit: async (values) => {
            await createIdea.mutateAsync(values)
            formik.resetForm()
        },
        successMessage: 'Idea created',
        showValidationAlert: true,
    })

    return (
        <Segment title="New Idea">
        <form
            className={css.form}
            onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit()}
            }
        >
            <FromItems>
                <Input name='name' label='Name' formik={formik} />
                <Input name='nick' label='Nick' formik={formik} />
                <Input name='description' label='Description' formik={formik} />
                <Textarea name='text' label='Text' formik={formik} />
                <Alert {...alertProps} />
                <Button {...buttonProps}>Create Idea</Button>
            </FromItems>
        </form>
        </Segment>
    )
}