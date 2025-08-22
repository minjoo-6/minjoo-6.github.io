import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionAward = ({ awards }) => {
  if (!awards.length) return null;

  return (
    <Section title="award">
      {awards.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          organization={item.organization}
          year={item.year}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default SectionAward;
