import Item from 'components/general/Item/Item.main'

export const facts = [
  'My name is Christian Villamin; I live in Manila, Philippines.',
  <>
    I&apos;m currently working at&nbsp;
    <a href="https://localhost/" target="_blank" rel="noopener noreferrer">
      ____________
    </a>{' '}
    as a software engineer.
  </>,
  <>
    I&apos;m a core member of&nbsp;
    <a href="https://reactjs.org.ph/" target="_blank" rel="noopener noreferrer">
      ReactJS Philippines.
    </a>
  </>,
  "I'm a self-taught programmer since age 10.",
  'I love learning, JavaScript, and open-source.',
  'I love mentoring aspiring web developers.'
].map((item, idx) => (
  <Item key={idx} ml="2rem" style={{ listStyle: 'initial' }}>
    {item}
  </Item>
))
