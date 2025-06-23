import './styles.css';

interface MarkListProps {
  items: string[];
}

const MarkList = ({
  items
}: MarkListProps) => (
  <ul className="mark-list">
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
)

export default MarkList;