import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import s from './ElementCategori.module.css';

export default function ElementCategori({ typeInfo, category, handleChange }) {
  const styleSelect = {
    color: '#c7ccdc',
    textTransform: 'capitalize',
    ':hover': { color: '#52555f' },
  };

  return (
    <>
      {typeInfo === 'расход' && (
        <Select
          className={s.category}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          required
          input={<OutlinedInput />}
          displayEmpty={<em>Категория товара</em>}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em>Категория товара</em>;
            }
            return selected;
          }}
        >
          <em>Категория товара</em>
          <MenuItem value="алкоголь" sx={styleSelect}>
            Aлкоголь
          </MenuItem>
          <MenuItem value="все для дома" sx={styleSelect}>
            Все для дома
          </MenuItem>
          <MenuItem value="здоровье" sx={styleSelect}>
            Здоровье
          </MenuItem>
          <MenuItem value="коммуналка, связь" sx={styleSelect}>
            Коммуналка, связь
          </MenuItem>
          <MenuItem value="образование" sx={styleSelect}>
            Образование
          </MenuItem>
          <MenuItem value="продукты" sx={styleSelect}>
            Продукты
          </MenuItem>
          <MenuItem value="развлечения" sx={styleSelect}>
            Развлечения
          </MenuItem>
          <MenuItem value="спорт, хобби" sx={styleSelect}>
            Спорт, хобби
          </MenuItem>
          <MenuItem value="транспорт" sx={styleSelect}>
            Транспорт
          </MenuItem>
          <MenuItem value="техника" sx={styleSelect}>
            Техника
          </MenuItem>
          <MenuItem value="прочее" sx={styleSelect}>
            Прочее
          </MenuItem>
        </Select>
      )}

      {typeInfo === 'доход' && (
        <Select
          className={s.category}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          placeholder="Описание товара"
          required
          displayEmpty={<em>Категория дохода</em>}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em>Категория дохода</em>;
            }
            return selected;
          }}
        >
          <em>Категория дохода</em>
          <MenuItem value="зп" sx={styleSelect}>
            зп
          </MenuItem>
          <MenuItem value="доп. доход" sx={styleSelect}>
            доп. доход
          </MenuItem>
        </Select>
      )}
    </>
  );
}
