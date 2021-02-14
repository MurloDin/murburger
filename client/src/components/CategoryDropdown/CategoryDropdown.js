import Dropdown from 'react-dropdown';
import "./CategoryDropdown.scss";

const options = [
    'Всё', 'Бургеры', 'Пиццы'
];
const defaultOption = options[0];

const CategoryDropdown = () => {
    return (
        <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Выберите категорию"
            onChange={(valuer) => console.log(valuer)}
        />
    );
};


export default CategoryDropdown;
