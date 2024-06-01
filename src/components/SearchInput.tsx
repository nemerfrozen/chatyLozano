import React from 'react'

interface SearchInputProps {
  submit: (e: any) => void
}

const SearchInput = ({submit}: SearchInputProps) => {
  return (
    <form action="/chat" onSubmit={submit} >
    <div className="input-group">
        <input name="term" id="term" type="text" placeholder="escribe......"  className="form-control p-5 rounded-0 border-0 bg-light" />
        <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
    </div>
</form>
  )
}

export default SearchInput