import { Action, createStore, Dispatch } from "redux";

import { connect, Provider } from "react-redux";

import { render } from "react-dom";

import { PureLinkList } from "./LinkList";

import * as React from "react";

// Adding our Actions - generates the events that change our store

const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

interface IAddLinkAction extends Action {
    type: ADD_LINK;
    link: {
        id: number,
        title: string,
        url: string
    };
}

const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

interface IClearLinkAction extends Action {
    type: CLEAR_LINK;
}

// adding our remove link button
const REMOVE_LINK = 'REMOVE_LINK';
type REMOVE_LINK = typeof REMOVE_LINK;

interface IRemoveLinkAction extends Action {
    type: REMOVE_LINK;
    key: number
}

type LinkActions = IAddLinkAction | IClearLinkAction | IRemoveLinkAction;

interface IRootState { // this is how redux stores the state
    links: Array<{
        id: number,
        title: string,
        url: string,
    }>
}

//

const rootReducer = (state: IRootState, action: LinkActions) => { // how the state is changed, returning the new state - reducer receives the action
    switch (action.type) {
        case ADD_LINK:
            return {
                links: state.links.concat([action.link])
            }
        case CLEAR_LINK:
            return {
                links: [] // reset the link
            }
        case REMOVE_LINK:
            // declare a variable for our manipulated array
            const newLinks = state.links.filter( item => {
                return item.id !== action.key; // we will tie our list key to id
            })
            return {
                links: newLinks
            }
        default: // define our default state of the links array
            return {
                links: [
                    { id: 0, title: 'Youporn', url: 'http://www.youporn.com' },
                    { id: 1, title: 'xHamster', url: 'http://www.xhamster.com' },
                ] // do not change the state in case of any other actions
            }
    }
};

const store = createStore<any, any, any, any>(rootReducer);

const mapStateToProps = (state: IRootState) => { // get the state from the redux store
    return {
        links: state.links
    }
}

const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) => {
    return {
        addLink: () => dispatch({
            link: {
                id: Math.random(),
                title: 'Bew-Cake',
                url: 'http://www.bukkake.com',
            },
            type: ADD_LINK,
        }),
        clearLink: () => dispatch({
            type: CLEAR_LINK
        }),
        removeLink: (key: number) => dispatch ({
            key,
            type: REMOVE_LINK,
        })
    }
}

// link the component to the store
const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)

const App = () => (
    <Provider store={store}>
        <div>
            <h2>Links</h2>
            <LinkList />
        </div>
    </Provider>
);

render(<App />, document.getElementById("root"));

export default App;