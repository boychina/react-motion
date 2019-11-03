import React from 'react';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import ListSort from './ListSort';
import './ListSortDemo.css';

const dataArray = [
  {
    _id: '00',
    icon: 'question-circle-o',
    color: '#F40500',
    title: 'Senior ',
    text: 'Senior Product Designer',
  },
  {
    _id: '01',
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    _id: '02',
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  },
  {
    _id: '03',
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Visual Designer',
    text: 'Visual Designer',
  },
  {
    _id: '04',
    icon: 'cross-circle-o',
    color: '#FFAA00',
    title: 'Computer Engineer',
    text: 'Computer Engineer',
  },
];

export default class ListSortDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  state = {
    selectedIndex: undefined,
  }

  render() {
    const { selectedIndex } = this.state;
    const childrenToRender = dataArray.map((item, i) => {
      const {
        icon, color, title, text,
      } = item;
      if(i % 2 === 0) {
        return (
          <div key={i} _id={item._id} className={`${this.props.className}-list ${selectedIndex === item._id ? 'selected' : ''}`}>
            <div className={`${this.props.className}-icon`}>
              <Icon type={icon} style={{ color }} />
            </div>
            <div className={`${this.props.className}-text`}>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </div>
        );
      }
      return (
        <div key={i} _id={item._id} className={`${this.props.className}-list banner ${selectedIndex === item._id ? 'selected' : ''}`}>
          <div className="operation-box"></div>
          Hello World!
          
        </div>
      );
    });
    return (
      <div className={`${this.props.className}-wrapper`}>
        <div className={this.props.className}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
            setSelectedIndex={(index) => this.setState({ selectedIndex: index })}
          >
            {childrenToRender}
          </ListSort>
        </div>
      </div>
    );
  }
}