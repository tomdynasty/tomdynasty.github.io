import React, { Component } from 'react';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class DrugStoreDom extends Component {
  render() {
    const { filteredDrugStores, handleSearchById } = this.props;
    return (
      <>
        {
          filteredDrugStores.map((el) => {
            const { properties } = el;
            const {
              address,
              id,
              name,
              phone,
              note,
              mask_adult,
              mask_child,
            } = properties;
            return <Card
            key={id}
            size="small"
            title={name}
            extra={(
              <div>
                <FontAwesomeIcon
                  className='icon-hover'
                  icon={faEye}
                  color="#73c0d8"
                  size="lg"
                  onClick={() => handleSearchById(id)}
                />
                {/* <span>&nbsp;&nbsp;&nbsp;</span>
                <FontAwesomeIcon
                  className='icon-hover'
                  icon={faLocationArrow}
                  color="#73c0d8"
                  size="lg"
                  onClick={() => handleSearchById(id)}
                /> */}
              </div>
              )}
           >
            <div className="drug-store-content">
              <i className="fas fa-camera fa-xs" />
              <div>- {address}</div>
              <div>- {phone}</div>
              <div>- {note}</div>
            </div>
            <div className="drug-store-mask-amount-group">
              <div className="adult-mask-amount">
                成人口罩
                <span className="amount-right">
                  {mask_adult}
                </span>
              </div>
              <span className="child-mask-amount">
                兒童口罩
                <span className="amount-right">{mask_child}</span>
              </span>
            </div>
          </Card>;
          })
        }
      </>
    );
  }
}

DrugStoreDom.propTypes = {
  filteredDrugStores: PropTypes.array.isRequired,
  handleSearchById: PropTypes.func.isRequired,
};

export default DrugStoreDom;
