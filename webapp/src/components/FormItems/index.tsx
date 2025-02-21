import css from './index.module.scss'

export const FromItems = ({children}: {children: React.ReactNode}) => {
    return <div className={css.formItems}>{children}</div>
}