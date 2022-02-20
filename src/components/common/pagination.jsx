import React from "react";
import _ from "lodash"; //underscore popular library

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize); // if pagesize > itemscount toh apan ko koi page number na dikhaye isliye ceil function use kia h!!
  if (pagesCount === 1) return null;

  //[1...pagesCount].map() -> to use lodash for this
  const pages = _.range(1, pagesCount + 1); // adding +1 so that last page is also included

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
