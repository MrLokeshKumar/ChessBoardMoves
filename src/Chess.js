import ChessBoard from './ChessBoard'
import { Provider } from 'react-redux'
import store from './store'

const Chess = () => {
    return(
        <Provider store={store}>
            <ChessBoard/>
        </Provider>
    )
}

export default Chess;