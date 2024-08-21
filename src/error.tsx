import { ErrorVariants } from './styles'
import { useRouteError } from 'react-router-dom'

const { errorcontainer, errorcontent, errorlayout, errortitle, errorstatus } = ErrorVariants({ layout: 'center' })

export function ErrorPage() {
  const error = useRouteError() as Error

  return (
    <div className={errorlayout()}>
      <div className={errorcontainer()}>
        <div className={errorcontent()}>
          <p className={errortitle()}>Oops, something went terribly wrong!</p>
          <h1 className={errorstatus()}>{error.message || JSON.stringify(error)}</h1>
        </div>
      </div>
    </div>
  )
}