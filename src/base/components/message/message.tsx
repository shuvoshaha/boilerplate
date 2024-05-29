import './message.scss'

export const ErrorMessage  = (msg: string) => {
    return <div className="show__message err__message"> { msg } </div>
}


export const SuccessMessage  = (msg: string) => {
    return <div className="show__message success__message"> { msg } </div>
}