import axios from "axios"; // used for our asynchronous call
import { Action, Dispatch } from "redux";

export interface ILink {
  title: string,
  url: string
}

export const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
export interface IAddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    title: string,
    url: string
  };
}

// Define CLEAR_LINK const and its type
export const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
export interface IClearLinkAction extends Action {
  type: CLEAR_LINK;
}

export const LOAD_LINK_SUCCESS = 'LOAD_LINK_SUCCESS';
export type LOAD_LINK_SUCCESS = typeof LOAD_LINK_SUCCESS;

export interface ILoadLinkSuccessAction extends Action {
  type: LOAD_LINK_SUCCESS;
  links: ILink[];
}

export const LOAD_LINK_FAILURE = 'LOAD_LINK_FAILURE';
export type LOAD_LINK_FAILURE = typeof LOAD_LINK_FAILURE;

export interface ILoadLinkFailureAction extends Action {
  type: LOAD_LINK_FAILURE;
}

// Collection of both for easier integration
export type LinkActions = IAddLinkAction | IClearLinkAction | ILoadLinkFailureAction | ILoadLinkSuccessAction;

export function addLink(title: string, url: string): IAddLinkAction {
  return {
    link: {
      title,
      url,
    },
    type: ADD_LINK,
  }
}

export function clearLink(): IClearLinkAction {
  return {
    type: CLEAR_LINK
  }
}

export function loadLinkSuccess(links: ILink[]): ILoadLinkSuccessAction {
  return {
    links,
    type: LOAD_LINK_SUCCESS,
  }
}

export function loadLinkFailure(): ILoadLinkFailureAction {
  return {
    type: LOAD_LINK_FAILURE
  }
}

export function loadLink():any {
  // tslint:disable:no-console
  return (dispatch: Dispatch<ILoadLinkSuccessAction | ILoadLinkFailureAction>) => {
    return axios('https://www.reddit.com/r/programming.json').then((res) => {
      const threads = res.data;
      const links = threads.data.children.map((t:any) => ({ // the return links from our call
        title: t.data.title,
        url: t.data.url
      }));
      console.log('Success', links);
      dispatch(loadLinkSuccess(links));
    }).catch((err) => {
      console.log('Failed', err);
      dispatch(loadLinkFailure());
    });
  };
}