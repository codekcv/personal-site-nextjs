import Card from 'components/Card'
import Image from 'next/image'
import cmsProject from 'public/images/headless_2.png'

export const projects = [
  {
    title: 'Headless Commerce',
    description:
      'An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL.',
    img: cmsProject
  }
].map((item) => (
  <Card key={item.title}>
    <Image src={item.img} alt={item.description} quality={100} />
  </Card>
))
