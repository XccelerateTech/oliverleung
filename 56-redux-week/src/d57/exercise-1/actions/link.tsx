import axios from "axios"; // used for our asynchronous call
import { Action, Dispatch } from "redux";

export interface ILink {
  craft: string,
  name: string
}

export const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
export interface IAddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    craft: string,
    name: string
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

export function addLink(craft: string, name: string): IAddLinkAction {
  return {
    link: {
      craft,
      name,
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
    return axios('http://api.open-notify.org/astros.json').then((res) => {
      const threads = res.data;
      const links = threads.people.map((t:any) => ({ // the return links from our call
        craft: t.craft,
        name: t.name,
      }));
      console.log('Success', links);
      dispatch(loadLinkSuccess(links));
    }).catch((err) => {
      console.log('Failed', err);
      dispatch(loadLinkFailure());
    });
  };
}