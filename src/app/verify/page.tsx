import Header from '@/components/Header';
import MarkList from '@/components/shared/MarkList';
import VerifyForm from '@/components/VerifyForm';
import Link from 'next/link';
import './styles.css';

interface VerifyProps {
  searchParams: Promise<{ email: string }>;
}

export default async function Verify({
  searchParams
}: VerifyProps) {
  const email = (await searchParams).email;
  return (
    <div className="verify-page">
      <Link className="back-link" href="/" >{`← Modify email`}</Link>
      <Header
        title="Get Verified!"
        subtitle="Enter the one-time code we sent to:"
        tagline={email}
      />
      <MarkList
        items={[
          'Access to 100+ GAMES fro FREE thanks to ads',
          'Log in Across All Your Devices',
          'Skip the Line with Customer Support'
        ]}
      />
      <VerifyForm to="plan" email={email} />
    </div>
  );
}
