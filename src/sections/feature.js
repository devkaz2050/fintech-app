/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Smart Features',
    text:
      'Our feature rich platform helps your business to reach greater heights.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Fast Performance',
    text:
      'Accept payments easily and order in advance your products.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'Unlimited Content',
    text:
      'Start paying any merchant by scanning QR code which will take less than few seconds.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Unlimited Customization',
    text:
      'Accept payments easily and order in advance your products.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Boost Productivity',
    text:
      'Start paying any merchant by scanning QR code which will take less than few seconds..',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Customer Support',
    text:
      ' We are available to assist you at any day and at any time.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="E-wallet Mobile Applications"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
