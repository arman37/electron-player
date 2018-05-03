/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';

/**
 *
 * @param text
 * @returns {XML}
 * @constructor
 */
const Title = ({text}) => {
  return (
    <h1 className="title deep-shadow">{text}</h1>
  );
};

export default Title;