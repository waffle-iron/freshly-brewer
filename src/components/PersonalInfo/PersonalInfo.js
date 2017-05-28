import React from 'react';

import Col from '../Col';
import DescriptionText from '../DescriptionText';
import InitialsSymbol from '../InitialsSymbol';
import Row from '../Row';
import Section from '../Section';

const PersonalInfoCore = () => {
  return (
    <Section>
      <Row>
        <Col width={5}>
          <DescriptionText
            header="MORGAN LINDSAY PARSONS"
            subHeader="THE BRIDE"
            align="right"
            >
              Aliquam sodales ligula risus, eget tempus elit pretium quis. Suspendisse nec accumsan diam. Nunc tempus vitae purus et auctor. Donec dictum lectus dui, eu dapibus odio pulvinar id. Fusce sed dolor nec eros rhoncus rhoncus vitae non ante. Donec dignissim mauris vitae nisl ultricies, non sodales erat pharetra. Proin at nisi diam. Aliquam lacus libero, gravida at elit nec, gravida efficitur neque. Maecenas nec augue varius, convallis sem at, porta nunc.
          </DescriptionText>
        </Col>
        <Col width={2}>
          <InitialsSymbol />
        </Col>
        <Col width={5}>
          <DescriptionText
            header="TYLER CLARK BREWER"
            subHeader="THE GROOM"
            >
              Aliquam sodales ligula risus, eget tempus elit pretium quis. Suspendisse nec accumsan diam. Nunc tempus vitae purus et auctor. Donec dictum lectus dui, eu dapibus odio pulvinar id. Fusce sed dolor nec eros rhoncus rhoncus vitae non ante. Donec dignissim mauris vitae nisl ultricies, non sodales erat pharetra. Proin at nisi diam. Aliquam lacus libero, gravida at elit nec, gravida efficitur neque. Maecenas nec augue varius, convallis sem at, porta nunc.
          </DescriptionText>
        </Col>
      </Row>
    </Section>
  )
}

export default PersonalInfoCore;