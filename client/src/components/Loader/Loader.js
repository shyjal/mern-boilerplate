import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './styles.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = (props) => {
  return (
    <div className="loader-container loader" {...props}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;
