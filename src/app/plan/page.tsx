import './styles.css';

import Header from '@/components/Header';
import PlanForm from '@/components/PlanForm';
import { getSubscriptionPlans } from '@/domain/subscription/api';
import { SubscriptionPlanType } from '@/domain/subscription/types';
import Link from 'next/link';

interface PlanProps {
  searchParams: Promise<{ userId: number }>;
}

export default async function Plan({
  searchParams
}: PlanProps) {
  const userId = (await searchParams).userId;
  const response = await getSubscriptionPlans();

  const plans = response
    ? [{ ...response.year, type: SubscriptionPlanType.year },
    { ...response.monthly, type: SubscriptionPlanType.month }]
    : [];

  const links = ['Privacy Policy', 'Terms of Service', 'Restore Purchase'];

  return (
    <div className="plan-page">
      <Link className="back-link" href="/" >{`← Modify email`}</Link>
      <Header title="Choose your plan" />
      <PlanForm userId={userId} plans={plans} to="success" />
      <footer>{links.map(link =>
        <a key={link} href="https://www.linkedin.com/in/daniel-san-luis/">
          {link}
        </a>
      )}
      </footer>
    </div>
  );
}
