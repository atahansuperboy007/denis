import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Form(){
    
    const [text, setText] = useState('')
    const history = useHistory()

    function searchMovie(params){
        history.push('/search/' + text)
    }

    return(
        <div className="form">
            <div className="container">
              <div className="form-inner">
                <div className="form-input">
                  <input type="text" value={text} onChange={e => setText(e.target.value) }/>
                  <button onClick={searchMovie}>найти</button>
                </div>
              </div>
            </div>
          </div>
    )
}
export default Form