import React, { Component } from 'react';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class DrugStoreDom extends Component {
  render() {
    const { filteredDrugStores } = this.props;
    console.log(filteredDrugStores);
    return (
      <>
        {
          filteredDrugStores.map((el) => {
            const { geometry, properties } = el;
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
                <FontAwesomeIcon icon={faEye} color="#73c0d8" size="lg" />
                <span>&nbsp;&nbsp;&nbsp;</span>
                <FontAwesomeIcon icon={faLocationArrow} color="#73c0d8" size="lg" />
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
};

export default DrugStoreDom;
