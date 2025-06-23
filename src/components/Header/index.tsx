import './styles.css';

interface HeaderProps {
  title: string;
  subtitle?: string;
  tagline?: string;
}

const Header = ({
  title,
  subtitle,
  tagline
}: HeaderProps) => (
  <header className="app-header">
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    {tagline && <p>{tagline}</p>}
  </header>
);

export default Header;