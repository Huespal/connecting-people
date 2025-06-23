import { describe, expect, render, screen, test } from '@/../testsSetup';
import MarkList from '@/components/shared/MarkList';

describe('MarkList', () => {
  test(`Renders component successfully given required properties`, async () => {
    render(<MarkList items={['item-1', 'item-2']} />);

    expect(screen.getByText('item-1')).toBeInTheDocument();
    expect(screen.getByText('item-2')).toBeInTheDocument();
  });
});
