import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  year: 'text-sm text-gray-500 mb-1',
  institution: 'text-sm text-gray-500 mb-1',
  organization: 'text-sm text-gray-500 mb-1',
  role: 'text-sm text-gray-700 mb-1',
  stack: 'text-sm text-gray-700 mb-1',
};

const SummaryItem = ({ name, description, link = false, internal = false, year, organization, institution, role, stack }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
        <h3 className={`${classes.name} ${link ? 'hover:underline hover:text-black' : ''}`}>
          {link ? linkContent : name}
        </h3>
        {year && <p className={classes.year}>{year}</p>}
        {institution && <p className={classes.institution}>{institution}</p>}
        {organization && <p className={classes.organization}>{organization}</p>}
        {role && <p className={classes.role}><strong>Role:</strong> {role}</p>}
        {stack && <p className={classes.stack}><strong>Stack:</strong> {stack}</p>}
        {description && <p className={classes.description}>{description}</p>}
      </div>
  );
};

export default SummaryItem;
