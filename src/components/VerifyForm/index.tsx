'use client';

import Button from '@/components/shared/Button';
import FieldText from '@/components/shared/FieldText';
import { sendEmail, validateEmail } from '@/domain/auth/api';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface VerifyFormProps {
  email: string;
  to?: string;
}

const VerifyForm = ({
  email,
  to
}: VerifyFormProps) => {
  const router = useRouter();

  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const reSend = async () => {
    await sendEmail(email);
  }

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    const response = await validateEmail(email, code);
    if (response?.user_id && to) {
      router.push(`${to}?userId=${response?.user_id}`);
    } else {
      setError('There has been an error verifying the email.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldText
        id="form-verify-code"
        name="formVerifyCode"
        isNumber
        value={code}
        error={error}
        placeholder="Verification code"
        onChange={setCode}
      />
      <p className="form-resend-cta">
        Didn&apos;t get an email? <strong onClick={reSend}>Resend Code</strong>
      </p>
      <Button type="submit" variant="secondary" disabled={!code}>
        Verify
      </Button>
    </form>
  );
}

export default VerifyForm;