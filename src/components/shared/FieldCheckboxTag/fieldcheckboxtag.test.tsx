import { describe, expect, render, screen, test, userEvent, vi } from '@/../testsSetup';
import FieldCheckboxTag from '@/components/shared/FieldCheckboxTag';

describe('FieldCheckboxTag', () => {
  const onChange = vi.fn();
  const requiredProps = {
    id: 'field-checkbox-tag',
    name: 'fieldCheckboxTag',
    checked: false,
    children: 'Test',
    onChange
  };

  test(`Renders component successfully
		and basic functionality given required properties`, async () => {
    render(<FieldCheckboxTag {...requiredProps} />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    await userEvent.click(input);
    expect(onChange).toHaveBeenCalled();
  });

  test('Renders component successfully given optional properties', () => {
    render(
      <FieldCheckboxTag
        {...requiredProps}
        checked={true}
        badge="Badge"
        label="Label"
        accentMsg="Accent Msg"
        footer="Footer"
      />
    );
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(screen.getByText('Badge')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Accent Msg')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
