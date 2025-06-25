'use client';

import PlanItem from '@/components/PlanForm/Item';
import Button from '@/components/shared/Button';
import { startTrial } from '@/domain/subscription/api';
import {
  SubscriptionPlan
} from '@/domain/subscription/types';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface PlanFormProps {
  plans: SubscriptionPlan[];
  userId: number;
  to?: string;
}

const PlanForm = ({
  plans,
  userId,
  to
}: PlanFormProps) => {
  const router = useRouter();

  const [planType, setPlanType] = useState(plans?.[0]?.type);
  const [error, setError] = useState('');

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    const response = await startTrial(userId);
    if (response?.error && to) {
      setError('There has been an error starting the trial.')
    } else if (to) {
      router.push(to);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="plans-container">
        {plans.map(plan => (
          <PlanItem
            key={plan.type}
            {...plan}
            checked={planType === plan.type}
            onSelect={setPlanType} />
        ))}
      </div>
      {error && <p className="error-message">{error}</p>}
      <p className="form-cancel-text">Cancel anytime.</p>
      <Button type="submit">Start my free trial!</Button>
    </form>
  );
}

export default PlanForm;