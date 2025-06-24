'use client';

import Button from '@/components/shared/Button';
import FieldCheckbox from '@/components/shared/FieldCheckbox';
import FieldText from '@/components/shared/FieldText';
import { sendEmail } from '@/domain/auth/api';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface EmailFormProps {
  to?: string;
}

const EmailForm = ({
  to
}: EmailFormProps) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isConsent, setIsConsent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    const response = await sendEmail(email);
    if (response?.error) {
      setError(response.error);
    } else if (to) {
      router.push(`${to}?email=${email}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldText
        id="form-email-address"
        name="formEmailAddress"
        value={email}
        error={error}
        placeholder="Email Address"
        onChange={setEmail}
      />
      <FieldCheckbox
        id="form-promotions"
        name="formPromotions"
        checked={isConsent}
        label="Send Me Offers, News and Fun Stuff!"
        onChange={setIsConsent}
      />
      <Button type="submit" variant="secondary" disabled={!email}>
        Connect
      </Button>
    </form>
  );
}

export default EmailForm;