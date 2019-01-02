import { Action, createStore, Dispatch } from "redux";

import { connect, Provider } from "react-redux";

import { render } from "react-dom";

import { PureLinkList } from "./LinkList";

import * as React from "react";

// Adding our Actions

const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

interface IAddLinkAction extends Action {
    type: ADD_LINK;
    link: {
        title: string,
        url: string
    };
}

const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

interface IClearLinkAction extends Action {
    type: CLEAR_LINK;
}

type LinkActions = IAddLinkAction | IClearLinkAction;

interface IRootState { // this is how redux stores the state
    links: Array<{
        // id: ,
        title: string,
        url: string,
    }>
}

//

const rootReducer = (state: IRootState, action: LinkActions) => {
    switch (action.type) {
        case ADD_LINK:
            return {
                links: state.links.concat([action.link])
            }
        case CLEAR_LINK:
            return {
                links: [] // reset the link
            }
        default:
            return {
                links: [
                    { title: 'Youporn', url: 'http://www.youporn.com' },
                    { title: 'xHamster', url: 'http://www.xhamster.com' },
                ] // do not change the state in case of any other actions
            }
    }
};

const store = createStore<any, any, any, any>(rootReducer);

const mapStateToProps = (state: IRootState) => {
    return {
        links: state.links
    }
}

const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) => {
    return {
        addLink: () => dispatch({
            link: {
                // id: ,
                title: 'Youporn',
                url: 'http://www.youporn.com',
            },
            type: ADD_LINK,
        }),
        clearLink: () => dispatch({
            type: CLEAR_LINK
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