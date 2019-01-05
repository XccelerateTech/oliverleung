import { connect } from "react-redux";
import { Dispatch } from 'redux'
import { addLink, clearLink, LinkActions, loadLink } from '../actions/link'
// import {LinkState} from '../reducers/link'
import { IRootState } from "../reducers";

import * as React from "react";

interface ILinkListProps {
  links: Array<{
    title: string,
    url: string
  }>,
  addLink: () => void,
  clearLink: () => void,
  loadLink: () => void
}
const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.loadLink}>Reload</button>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      <ul>
      {props.links.map( (l, i) => (
        <li key={i}>{l.title} - {l.url}</li>
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
    addLink: () => dispatch(addLink('Accelerate', 'http://www.acceleratedhk.com')),
    clearLink: () => dispatch(clearLink()),
    loadLink: () => dispatch(loadLink())
  }
}
const LinkList = connect(mapStateToProps, mapDispatchToProp)(PureLinkList)

export default LinkList;
