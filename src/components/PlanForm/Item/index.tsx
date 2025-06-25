import FieldCheckboxTag from '@/components/shared/FieldCheckboxTag';
import {
  SubscriptionPlan, SubscriptionPlanType
} from '@/domain/subscription/types';
import { useMemo } from 'react';

interface PlanItemProps extends SubscriptionPlan {
  checked: boolean;
  onSelect: (type: SubscriptionPlanType) => void;
}

const PlanItem = ({
  type,
  price,
  currency,
  trial_days,
  checked,
  onSelect
}: PlanItemProps) => {
  const isYear = useMemo(() => type === SubscriptionPlanType.year, [type]);
  const label = useMemo(() => isYear ? 'Annually' : 'Monthly', [isYear]);
  const badge = useMemo(() => isYear ? 'Save 20 %' : undefined, [isYear]);
  const accentMsg = useMemo(() => isYear ? 'Best value' : undefined, [isYear]);
  const formattedPrice = useMemo(() =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency })
      .format(price), [price, currency]);
  const periodicity = useMemo(() => isYear ? 'year' : 'month', [isYear]);

  return (
    <FieldCheckboxTag
      key={type}
      id={type}
      name={type}
      badge={badge}
      accentMsg={accentMsg}
      label={label}
      checked={checked}
      onChange={() => { onSelect(type); }}
      footer={`${trial_days}-day free trial`}
    >
      <>
        <p className="billing-price">
          {formattedPrice} /{periodicity}
        </p>
        <p>Billed {label.toLowerCase()}</p>
      </>
    </FieldCheckboxTag >
  )
}

export default PlanItem;