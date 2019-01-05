import { connect } from "react-redux";
import { Dispatch } from 'redux'
import { addLink, clearLink, LinkActions, loadLink } from '../actions/link'
// import {LinkState} from '../reducers/link'
import { IRootState } from "../reducers";

import * as React from "react";

interface ILinkListProps {
  links: Array<{
    craft: string,
    name: string
  }>,
  addLink: () => void,
  clearLink: () => void,
  loadLink: () => void
}
const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.loadLink}>Reveal</button>
      <button onClick={props.addLink}>New Spaceman</button>
      <button onClick={props.clearLink}>Clear</button>
      <ul>
      {props.links.map( (l, i) => (
        <li key={i}>{l.craft} - {l.name}</li>
      ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    links: state.links
  }
}

// Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: Dispatch<LinkActions>) => {
  return {
    addLink: () => dispatch(addLink('BKE', 'Pat McGroin')),
    clearLink: () => dispatch(clearLink()),
    loadLink: () => dispatch(loadLink())
  }
}
const LinkList = connect(mapStateToProps, mapDispatchToProp)(PureLinkList)

export default LinkList;
