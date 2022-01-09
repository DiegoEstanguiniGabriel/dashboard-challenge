import './styles.css';
import Select from 'react-select';

const options = [
  { value: 'A', label: 'Mogi' },
  { value: 'B', label: 'Campinas' },
  { value: 'C', label: 'Estiva' }
];

function Filter() {
  return (
    <div className="filter-container">
      <Select className="filter-select" options={options} placeholder="Selecione.." />
    </div>
  );
}

export default Filter;
