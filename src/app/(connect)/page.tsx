import MarkList from '@/components/shared/MarkList';
import EmailForm from '@/components/EmailForm';
import Header from '@/components/Header';
import './styles.css';

export default function Connect() {
  return (
    <div className="connect-page">
      <Header
        title="Connect Your Account"
        subtitle="...and unlock your benefits!"
      />
      <MarkList
        items={[
          'Access to 100+ GAMES fro FREE thanks to ads',
          'Log in Across All Your Devices',
          'Skip the Line with Customer Support'
        ]}
      />
      <EmailForm to="verify" />
      <footer>
        By continuing, you agree to our <a>
          Terms of Service</a> and <a>Privacy Policy</a>.
      </footer>
    </div>
  );
}
