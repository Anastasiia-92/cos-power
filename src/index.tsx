import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/redux-store';
import {Provider} from "react-redux";

// export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }
// rerenderEntireTree()
//
// store.subscribe( () => {
//     rerenderEntireTree();
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
