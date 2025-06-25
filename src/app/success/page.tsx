import './styles.css';

import Image from 'next/image';

export default async function Success() {
  return (
    <div className="success-page">
      <h1>Congrats! You&apos;re now a <mark>subscriber</mark>!</h1>
      <p>Explore your membership now.</p>
      <Image
        src="/fireworks.png"
        width={300}
        height={300}
        alt="Congratulations!"
      />
    </div>
  );
}
