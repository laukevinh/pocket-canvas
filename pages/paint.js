import Link from 'next/link'

export default function Paint() {
  return (
    <>
      <h1>Paint app</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}