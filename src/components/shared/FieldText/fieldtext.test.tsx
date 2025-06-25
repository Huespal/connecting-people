import {
  describe, expect, fireEvent, render, screen, test, vi
} from '@/../testsSetup';
import FieldText from '@/components/shared/FieldText';

describe('FieldText', () => {
  const onChange = vi.fn();
  const requiredProps = { id: 'test', name: 'test', value: '', onChange };

  test('Renders component successfully given required properties', () => {
    render(<FieldText {...requiredProps} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Displays placeholder successfully given the \'placeholder\' property',
    () => {
      render(<FieldText {...requiredProps} isNumber placeholder="Test" />);

      expect(screen.getByPlaceholderText('Test')).toBeInTheDocument();
    });

  test('Displays label successfully given the \'label\' property',
    () => {
      render(<FieldText {...requiredProps} label="Test" />);

      expect(screen.getByText('Test')).toBeInTheDocument();
    });

  test('Calls onChange callback successfully given search button click', () => {
    render(<FieldText {...requiredProps} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(onChange).toHaveBeenCalledWith('Test');
  });

  test('Renders error message given \'error\' message property', () => {
    render(<FieldText {...requiredProps} error="Error" />);

    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
