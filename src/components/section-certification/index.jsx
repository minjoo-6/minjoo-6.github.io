import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCertification = ({ certifications }) => {
  if (!certifications.length) return null;

  return (
    <Section title="certifications">
      {certifications.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          institution={item.institution}
          year={item.year}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default SectionCertification;
