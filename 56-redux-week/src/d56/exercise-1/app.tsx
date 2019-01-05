import { createStore } from "redux";
import { LinkList } from "./LinkList";
import { UserList } from './UserList';

import { Provider } from "react-redux";

import { render } from "react-dom";

import * as React from "react";

export interface IRootState { // this is how redux stores the state
    links: Array<{
        title: string,
        url: string,
    }>,
    users: Array<{
        user: string
    }>
}

const rootReducer = (state: IRootState) => {
    return {
        links: [
            { title: 'Youporn', url: 'http://www.youporn.com' },
            { title: 'xHamster', url: 'http://www.xhamster.com' },
        ],
        users: [
            { user: 'oleung4' },
            { user: 'hamburgle4' }
        ]
    }
};

const store = createStore<any,any,any,any>(rootReducer);

const App = () => (
    <Provider store={store}>
        <div>
            <h2>Links</h2>
            <LinkList />
            <h2>Users</h2>
            <UserList />
        </div>
    </Provider>
);

render(<App />, document.getElementById("root"));

export default App;