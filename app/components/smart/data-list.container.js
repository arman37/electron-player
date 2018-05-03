/**
 * @author arman
 * @since 1/27/17
 *
 */

import React from 'react';
import TableView from '../dumb/table-view.component';
import SlideView from '../smart/coverflow.container';
import Toggle from 'material-ui/Toggle';

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableView: false
    }
  }

  handleViewChange() {
    this.setState({tableView: !this.state.tableView});
  }

  componentDidMount() {
    let slider = $('#slider__preview__coverflow div');
    if(slider.length) {
      //this.drawSlider();
    }
  }

  componentDidUpdate() {
    //this.drawSlider();
  }

  shouldComponentUpdate() {
    return !(this.props.playStatus === 'PLAYING');
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%', left: '0'}}>
        <Toggle
          className="btn__change__view"
          defaultToggled={!this.state.tableView}
          style={{width: '10px', float: 'right'}}
          onToggle={this.handleViewChange.bind(this)} />
        {
          this.state.tableView ?
            (<TableView
              play={this.props.play}
              trackList={this.props.trackList}
              tbodyHeight={this.props.tbodyHeight} />)
            :
            (<SlideView
              play={this.props.play}
              trackList={this.props.trackList}
              drawSlider={this.drawSlider.bind(this)} />)
        }
      </div>
    )
  }
}

export default DataList;