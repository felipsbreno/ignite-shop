import Link from 'next/link';
import { styled, theme } from '../styles';

const Button = styled('button', {
  backgroundColor: theme.colors.rocketseat,
});

export default function Home() {
  return (
    <>
      <Link href="/success">success</Link>

      <Button>Olá</Button>
    </>
  );
}
