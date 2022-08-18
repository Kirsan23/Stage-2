import { Heading } from '../Heading';

export function Logo(props) {
  const { reverse } = props

  if (reverse) {
    return <Heading><span>Digi</span>ency</Heading>
  }

  return <Heading>Digi<span>ency</span></Heading>;
}
