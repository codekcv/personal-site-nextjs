import Card from 'components/Card'
import Image from 'next/image'
import headless1 from 'public/images/headless_1.png'

export const projects = [
  {
    title: 'Headless Commerce',
    description:
      'An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL.',
    img: headless1
  }
].map((item) => (
  <Card key={item.title}>
    <Image src={item.img} alt={item.description} />
  </Card>
))
