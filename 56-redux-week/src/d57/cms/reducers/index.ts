// reducers/index.ts

import { combineReducers } from 'redux'
import { linkReducer, LinkState } from './link'

export interface IRootState {
  links: LinkState,
}

export const rootReducer = combineReducers<IRootState>({
  links: linkReducer
})