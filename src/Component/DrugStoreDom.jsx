import React, { Component } from 'react';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

class DrugStoreDom extends Component {
  render() {
    return (
      <div>
        <Card
          size="small"
          title="啄木鳥藥局"
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
            <div>- 台北市中正區汀州路3段125號</div>
            <div>- 02-23648180</div>
            <div>- 下午2點開始販售同時發號碼牌，228連假週五至週日休息</div>
          </div>
          <div className="drug-store-mask-amount-group">
            <div className="adult-mask-amount">
              成人口罩
              <span className="amount-right">
                0
              </span>
            </div>
            <span className="child-mask-amount">
              兒童口罩
              <span className="amount-right">30</span>
            </span>
          </div>
        </Card>
        <Card
          size="small"
          title="吃吃吃藥局"
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
            <div>- 台北市中正區汀州路3段125號</div>
            <div>- 02-23648180</div>
            <div>- 下午2點開始販售同時發號碼牌，228連假週五至週日休息</div>
          </div>
          <div className="drug-store-mask-amount-group">
            <div className="adult-mask-amount">
              成人口罩
              <span className="amount-right">
                0
              </span>
            </div>
            <span className="child-mask-amount">
              兒童口罩
              <span className="amount-right">30</span>
            </span>
          </div>
        </Card>
        <Card
          size="small"
          title="123藥局"
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
            <div>- 台北市中正區汀州路3段125號</div>
            <div>- 02-23648180</div>
            <div>- 下午2點開始販售同時發號碼牌，228連假週五至週日休息</div>
          </div>
          <div className="drug-store-mask-amount-group">
            <div className="adult-mask-amount">
              成人口罩
              <span className="amount-right">
                0
              </span>
            </div>
            <span className="child-mask-amount">
              兒童口罩
              <span className="amount-right">30</span>
            </span>
          </div>
        </Card>
      </div>
    );
  }
}

export default DrugStoreDom;
