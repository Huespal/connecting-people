import { describe, expect, render, screen, test, userEvent, vi } from '@/../testsSetup';
import FieldCheckbox from '@/components/shared/FieldCheckbox';

describe('FieldCheckbox', () => {
  const onChange = vi.fn();
  const requiredProps = {
    id: 'field-checkbox',
    name: 'fieldCheckbox',
    onChange
  };

  test(`Renders component successfully
		and basic functionality given required properties`, async () => {
    render(<FieldCheckbox {...requiredProps} />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    await userEvent.click(input);
    expect(onChange).toHaveBeenCalled();
  });

  test('Renders component successfully given optional properties', () => {
    render(
      <FieldCheckbox
        {...requiredProps}
        value="false"
        checked={true}
        label="Test"
        disabled={true}
        error="Required"
      />
    );
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});
