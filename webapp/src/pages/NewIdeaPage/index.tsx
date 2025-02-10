import { useFormik } from 'formik'
import { Segment } from '../../components/Segment'
import css from './index.module.scss'
import { Input } from '../../components/Input/Index'
import { Textarea } from '../../components/Textarea'

export const NewIdeaPage = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            nick: '',
            description: '',
            text: '',
        },
        onSubmit: (values) => {
            console.log(values)
        }
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
            <Input name='name' label='Name' formik={formik} />
            <Input name='nick' label='Nick' formik={formik} />
            <Input name='description' label='Description' formik={formik} />
            <Textarea name='text' label='Text' formik={formik} />

            <button type="submit">Create Idea</button>
        </form>
        </Segment>
    )
}